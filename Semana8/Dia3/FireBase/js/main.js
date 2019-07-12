window.onload = ()=>{

    var btnGetCanchas = document.getElementById("btnGetCanchas");
    var divTabla = document.getElementById("tabla");
    var btnCrearCancha = document.getElementById("btnCrear");

    let btnSubirArchivo = $("#btnSubirArchivo");
    let inputSubirArchivo = document.getElementById("inputSubirArchivo");


    // Initialize Firebase
    let iniciarFirebase = ()=>{
        var config = {
            apiKey: "AIzaSyCY45iIJdX1s62vmucJstpWwEZzU0tEtLQ",
            authDomain: "pruebafb-36284.firebaseapp.com",
            databaseURL: "https://pruebafb-36284.firebaseio.com",
            projectId: "pruebafb-36284",
            storageBucket: "pruebafb-36284.appspot.com",
            messagingSenderId: "672613429294"
        };
        firebase.initializeApp(config);
    }
    
    let getCanchitas = ()=>{
        //Conectarse a una base de datos
        //1.- Tener referencia al nodo al que conectaremos
        var referencia = firebase.database().ref('canchitas');
        //2.- traer la data a partir de la referencia
        referencia.on('value',(data)=>{
            imprimirData(data);
        })
    }

    let imprimirData = data => {
        var result = [];

        data.forEach(fila => {
            result.push({id: fila.key,
                        nombre: fila.val().nombre,
                        direccion: fila.val().direccion,
                        latitud: fila.val().latitud
                        });
        });

        //for(var i in data) //´para convertir object json en array
        //result.push([i, data[i]]);
        removeTable("mtd");
        insertarTabla(result,divTabla);

        data.forEach(fila => {
            console.log(`ID: ${fila.key}`);
            console.log(`Nombre: ${fila.val().nombre}`);
            console.log(`Direccion: ${fila.val().direccion}`);
        });
    }

    let crearCancha = ()=>{
        console.log("Se creo"); 
        let nombre = "Nueva Cancha"
        let direccion = "Nueva direccion"
        let referencia = firebase.database().ref('canchitas')
        //insertando un registro en la base de datos.
        //1.- Generar un nuevo id de registro
        const nuevoKey = referencia.push().key;
        //la funcion child hace referencia a un hijo de la "referencia"
        //la funcion set() recibe un JSON con la data que se guardará dentro de la referencia.
        referencia.child(nuevoKey).set({
            nombre: nombre,
            direccion: direccion
        },(error)=>{
            console.log(error);
        });
    }

    let subirarchivo = ()=>{
        let archivo = inputSubirArchivo.files[0];
        let nombre = archivo.name;
        let nombrefinal = +(new Date()) + "-" + nombre;
        //referencia al Storage de Firebase
        let referenciaStorage = firebase.storage().ref();
        let metadata = {
            contentType: archivo.Type
        };
        referenciaStorage.child(`carpeta/${nombrefinal}`).put(archivo,metadata).then((response)=>{
            //console.log(response);
            return response.ref.getDownloadURL();
            
        }).then((url)=>{
            console.log(url);
            let referenciaDatabase = firebase.database().ref("canchitas/-LcCKXj6UGo7w4U6mfXw");
            return referenciaDatabase.update({imagen:url});
        }).then(()=>{
            console.log("Archivo subido y cancha actualizada.");
            
        }).catch((error)=>{
            console.log(error);

        });
    }


    iniciarFirebase();

    btnGetCanchas.onclick = getCanchitas;
    btnCrearCancha.onclick = crearCancha;

    btnSubirArchivo.click(subirarchivo);

    function insertarTabla(data,mdiv) {
        //debugger;
        //removeTable("mtd");
        let mtabla = document.createElement("table");
        mtabla.setAttribute("class","table table-hover table-dark");
        mtabla.setAttribute("id","mtd");
        let cad = "";
        let flag = false;
        let strName = "";
    
        for (let index = 0; index < data.length; index++) {
            //debugger;
            let tr = document.createElement("tr");
            for(strName in data[index])
            {
                if(index == 0 && flag == false){
                    cad = cad + `<th>${strName}</th>`;
                }else{
                    //debugger;
                    if (data[index][strName].toString().match(/^.*jpg/)) {
                        cad = cad +  `<td><div class="text-center" id="cargaimg"><div class="spinner-border" role="status"></div></div><img id="imgC" hidden="hidden" src="${data[index][strName]}"/></td>`;
                      }else if(data[index][strName].toString().match(/^.*object/)){
                        let mdiv2 = document.createElement("div");
                        // //debugger;
                        // console.log(data[index][strName]);
                        
                        // insertarTabla(data[index][strName],mdiv2);
                        cad = cad +  `<td>${mdiv2.innerHTML}</td>`;
                        //console.log(mdiv2)
                      }else{
                        cad = cad +  `<td>${data[index][strName]}</td>`;
                      }
                }
            }
            tr.innerHTML = cad;
            mtabla.appendChild(tr);
            if(index == 0 && flag == false){
                index = -1;
                flag = true;
            }
            cad = "";
        }
        mdiv.appendChild(mtabla);
    }

    function removeTable(id){
        var tbl = document.getElementById(id);
        if(tbl) tbl.parentNode.removeChild(tbl);
    }
}