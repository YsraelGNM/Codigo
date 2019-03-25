window.onload = function () {
    

//evento => funcion que se ejecuta tras capturar una accion en un elemento.
function cambiarColor() {
    var mBody = document.querySelector("body");
    mBody.style.backgroundColor = "blue";
}
var miDiv = document.getElementById("miDiv");
miDiv.onclick = cambiarColor;

//onload => se ejecuta cuabdo ya se cargo todos los elementos.


var miDiv2 = document.getElementById("miDiv2");
miDiv2.addEventListener("click",function(){
    let mBody = document.querySelector("body");
    mBody.style.backgroundColor = "red";
});

var miDiv3 = document.getElementById("miDiv3");
miDiv3.onclick = function (evento) {
    console.log(evento);   
    console.log(evento.target);
    console.log(evento.altKey);
    console.log(evento.ctrlKey);
    console.log(evento.shiftKey);
    //ClientX y ClientY posicion en relacion a la ventana
    console.log(`Raton en X en la ventana ${evento.clientX}`);
    console.log(`Raton en Y en la ventana ${evento.clientY}`);
    //offSetX y offSetY posicion en relacion al elemento               
    console.log(`Raton en X en el elemento ${evento.offsetX}`);
    console.log(`Raton en Y en el elemento ${evento.offsetY}`);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

var body = document.querySelector("body")
body.onclick = function(evento) {
    var cua = document.createElement("div")
    var tamanio = getRandomArbitrary(10,25);
    cua.style.width = tamanio;
    cua.style.height = tamanio;
    cua.style.borderRadius = "50%"
    cua.style.backgroundColor = getRandomColor();
    cua.style.top = evento.clientY;
    cua.style.left = evento.clientX;
    cua.style.position = "absolute";
    body.appendChild(cua);
};

}