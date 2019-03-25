// window => representa al navegador.
// funcionm location => obtiene la ruta actual de la url.
document.write(window.location);
//innerWidth => devuelve el ancho de la ventana en pixeles.
//innerHeight => devuelve el ancho de la ventana en pixeles.
document.write(window.innerWidth);
document.write(window.innerHeight);
// obtiene el desplazamiento del navegador
document.write(window.scrollX);
document.write(window.scrollY);
// ejecuta la funcion tras la cantidad de milisegundos asignados
setTimeout(() => {
    alert("Han pasado 5 segundos");
}, 5000);
//ejecuta la funcion cada cantidad de milisegundos
var intervalo = setInterval(() => {
    console.log(new Date());
}, 500);
//termina el proceso de un intervalo
setTimeout(() => {
    clearInterval(intervalo);
}, 5000);
//abre una url
open('https://www.f1latam.com');
