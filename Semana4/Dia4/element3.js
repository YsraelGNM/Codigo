var mPrincipal = document.getElementById("principal");
var parrafo = document.createElement("p");
parrafo.innerHTML = "este es un parrafo.";
mPrincipal.appendChild(parrafo);



var tr = document.createElement("tr");
var th = document.createElement("th");
th.innerHTML = "Numero";
var th1 = document.createElement("th");
th1.innerHTML = "Cantidad";
var th2 = document.createElement("th");
th2.innerHTML = "Descripcion";
var th3 = document.createElement("th");
th3.innerHTML = "P.Unitario";
var th4 = document.createElement("th");
th4.innerHTML = "P.Total";

tr.appendChild(th);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
mPrincipal.appendChild(tr);

num = +prompt("Ingresa un numero");

AgregarFila(num);

function AgregarFila(numero) {
    for(j=0; j<numero; j++){
        var tr1 = document.createElement("tr");
        for(i=0; i<tr.childElementCount; i++){
            var td = document.createElement("td");
            if (i == 0){
                td.innerHTML = j+1;
            }else{
                if (tr.cells[i].innerHTML == "P.Total"){
                    td.innerHTML = (parseFloat(tr1.cells[i-3].innerHTML) * parseFloat(tr1.cells[i-1].innerHTML)).toString();
                }
                else{
                     td.innerHTML =  prompt(`Ingresa la ${tr.cells[i].innerHTML}`);
                }
            }
            tr1.appendChild(td);
        }
        mPrincipal.appendChild(tr1);
    }
}


