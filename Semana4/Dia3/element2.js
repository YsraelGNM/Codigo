var mPrincipal = document.getElementById("principal");
var parrafo = document.createElement("p");
parrafo.innerHTML = "este es un parrafo.";
parrafo.style.color = "red";
//elemento1.appendChild(elemento2) => agrega al elemento 1 el elemento 2, al final de todo.
mPrincipal.appendChild(parrafo);