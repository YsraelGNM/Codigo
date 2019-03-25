'use strict';
window.addEventListener("load",function() {
    ////sirve para guardar datos en le navegador.
    ////los datos se pierden cuando el navegador se cierra.
    ////setItem([clave],[valor])
    ////la clave es el nombre de la variable que guardará el valor.
    //// el valor es el dato que pertenecerá a la clave.
    //localStorage.setItem("nombre","Ysrael Núñez");
    //document.querySelector("body").innerHTML = localStorage.getItem("nombre");
    //localStorage.removeItem("nombre");


    // let factura = {
    //     nombre: "nombre",
    //     ruc:"ruc",
    //     fecha: "fecha",
    //     productos: [{
    //         cantidad:9,
    //         desc:"lavadora",
    //         punit:786.32,
    //         categoria:"electro"
    //         }
    //     ]
    // };

    // //JSON.stringify convierte el objeto a una cadena
    // //el localstorage solo recibe strings.
    // let facturastring = JSON.stringify(factura);
    // localStorage.setItem("mObjeto2",facturastring);
    
    // let mNewFactura2 = JSON.parse(facturastring);
    // console.log(mNewFactura2);


    var clasefacturadetalle = function(cant, desc, punit, cat){
        var facturadetalle = {
            cantidad: cant,
            descripcion: desc,
            precio_unitario: punit,
            categoria: cat
        }    
        return facturadetalle;
    };

    var clasefactura = function(nom, ruc, fecha, tabla){
        var factura = {
            nombre: nom,
            ruc: ruc,
            fecha: fecha,
            productos: [clasefacturadetalle],
            agregardetalle: function(tabla){
                //debugger;
                let rows = tabla.getElementsByTagName("tr").length;
                for (let index = 1; index < rows; index++) {
                    let element = tabla.rows[index];
                    let detalle = clasefacturadetalle(element.cells[1].innerHTML,element.cells[2].innerHTML,element.cells[4].innerHTML,element.cells[3].innerHTML)
                    this.productos[index-1] = detalle;
                }
            }
        }
        factura.agregardetalle(tabla);    
        return factura;
    };

    
    var tr = document.getElementById("tr");
    var mtable = document.getElementById("tabla");
    var cont = 1;

    var mbtn = document.getElementById("btn");
    mbtn.addEventListener("click",function () {
        let mcant = document.getElementById("cant");
        let mdesc = document.getElementById("desc");
        let mcategoria = document.getElementById("categoria");
        let mpunit = document.getElementById("punit");

        if(mcant.value > 0){
            AgregarFila(1, mcant.value,mdesc.value,mcategoria.value,mpunit.value);
        }else{
            alert("Debe un ingresar un detalle valido.")
        }
       
        //debugger;
        let mtt = document.getElementById("Tt");
        mtt.innerHTML = (parseFloat(mtt.innerHTML) + (parseFloat(mcant.value) * parseFloat(mpunit.value))).toString();
        let mst = document.getElementById("St");
        mst.innerHTML = (parseFloat(mtt.innerHTML)/1.18).toString();
        let migv = document.getElementById("Igv");
        migv.innerHTML = ((parseFloat(mtt.innerHTML)/1.18)*0.18).toString();
        
        mcant.value = "";
        mdesc.value = "";
        mcategoria.value = "";
        mpunit.value = "";

    });


    function AgregarFila(numero, cant, desc, categoria, punit) {
        for(var j=0; j<numero; j++){
            var tr1 = document.createElement("tr");
            for(var i=0; i<tr.childElementCount; i++){
                var td = document.createElement("td");
                if (i == 0){
                    td.innerHTML = j+1;
                }else{
                    if (tr.cells[i].innerHTML == "Total"){
                        td.innerHTML = (parseFloat(tr1.cells[i-4].innerHTML) * parseFloat(tr1.cells[i-1].innerHTML)).toString();
                    }
                    else{
                        switch (true) {
                            case i == 1:
                                td.innerHTML =  cant;
                                break;
                        
                            case i == 2:
                                td.innerHTML =  desc;
                                break;
                            case i == 3:
                                td.innerHTML =  categoria;
                                break;
                            case i == 4:
                                td.innerHTML =  punit;
                                break;
                            default:
                                break;
                        }
                        
                    }
                }
                tr1.appendChild(td);
            }
            mtable.appendChild(tr1);
        }
    };


    var mbtnT = document.getElementById("btnT");
    mbtnT.addEventListener("click",function () {
        var mnombre = document.getElementById("nombre");
        var mruc = document.getElementById("ruc");
        var mfecha = document.getElementById("fecha");
        var mtabla = document.getElementById("tabla");

        AgregarStorage(cont, mnombre.value, mruc.value, mfecha.value, mtabla);

        cont++;
        mnombre.value = "";
        mruc.value = "";
        mfecha.value = "";
        mtabla.value = "";
 
        for(var i = mtabla.rows.length - 1; i > 0; i--)
        {
            mtabla.deleteRow(i);
        }
    })

    function AgregarStorage(cont, nombre, ruc, fecha, tabla) {
        let fact = clasefactura(nombre,ruc,fecha,tabla);
        let facturastring = JSON.stringify(fact)
        localStorage.setItem(cont.toString(),facturastring)        
    }
})