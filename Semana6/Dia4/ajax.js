'use strict';
window.addEventListener("load",function(){
   
//     document.getElementById("btnAjax").addEventListener("click",function () {
//        cargarAjax();
//    })

   document.getElementById("btnAjax").onclick = cargarAjax;
   var cargando = document.querySelector("#carga");

   function cargarAjax() {
        cargando.removeAttribute("hidden");
        //Creando un obj XMLHttpRequest    
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            switch (xhr.readyState) {
                case 1:
                    //algo
                    break;
                case 2:
                    //algo
                    break;
                case 3:
                    //algo
                    break;
                case 4:
                    //console.log(xhr.response) este response con todo el contenido
                    let jsoncompleto = JSON.parse(xhr.responseText);
                    // este responsetext solo trae el body
                    let mdiv = document.getElementById("mDiv");
                    insertarTabla(jsoncompleto.data,mdiv);
                    cargando.setAttribute("hidden","hidden");

                    let mImg = document.querySelectorAll("#cargaimg");

                    let demora = setInterval(function() {
                        mImg.forEach(element => {
                            element.setAttribute("hidden","hidden");
                        });
                        //mImg.setAttribute("hidden","hidden");
                    },500)

                    
                    let mImgC = document.querySelectorAll("#imgC");
                    mImgC.forEach(element => {
                        element.removeAttribute("hidden");
                    });
                    //mImgC.removeAttribute("hidden");
                    break;
                default:
                    break;
            }
        }
        //open => configura el verbo Http y la direccion a comsumir. 
        xhr.open("GET","https://reqres.in/api/users?page=2");
        //send => envia cabeceras y contenido a la ruta de la funcion open y abre dicha
        //ruta en la variable xhr.
        xhr.send(null);
    };


   function insertarTabla(data,mdiv) {
    //debugger;
    removeTable("mtd");
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
                if (data[index][strName].toString().match(/^.*jpg/)) {
                    cad = cad +  `<td><div class="text-center" id="cargaimg"><div class="spinner-border" role="status"></div></div><img id="imgC" hidden="hidden" src="${data[index][strName]}"/></td>`;
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


   function removeTable(id)
    {
        var tbl = document.getElementById(id);
        if(tbl) tbl.parentNode.removeChild(tbl);
    }





});