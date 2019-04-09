$(function() {
    var contenido = $("#contenido")[0]
    var btnGet = $("#btnGet")

    btnGet.click(function (e) { 

        removeTable("mtd");

        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            timeout: 1000,
            data:null,
            success: function(respuesta) {
                //console.log(respuesta);
                insertarTabla(respuesta,contenido)
            },
            error: function(error) {
                console.log(error);
            },
            beforeSend: function() {
                console.log("antes de realizar la peticion.");
            }
        })


        
    });


   




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
                        //debugger;
                        console.log(data[index][strName]);
                        
                        insertarTabla(data[index][strName],mdiv2);
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
    
    
       function removeTable(id)
        {
            var tbl = document.getElementById(id);
            if(tbl) tbl.parentNode.removeChild(tbl);
        }
    

})