var arreglo1 = new Array();
var arreglo2 = [21,3,4,4,5,5,3];
//propiedades
document.write(`<p>Tamaño de arreglo2 ${arreglo2.length}</p>`);
document.write(`<p>Insertar un elemento al final ${arreglo2.push(80)}</p>`);
document.write(`<p>Eliminar y obtener el ultimo elemento ${arreglo2.pop()}</p>`);
document.write(`<p>slice(ini,fin) => devuelve un arreglo considerando las posiciones inicio y final ${arreglo2.slice(3,6)}</p>`);
console.log(arreglo2);
document.write(`<p>pslice => cambia el arreglo original y el comportamiento, es similar a la funcion slice. ${arreglo2.pslice(3)}</p>`);
console.log(arreglo2);
document.write(`<p>IndexOf => retorna la primera posicion de un elemento buscado ${arreglo2.indexOf(5)}</p>`);