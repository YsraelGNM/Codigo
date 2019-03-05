// //Estructura for
// for(var cont = 0; cont < 9; cont += 1){
//     console.log(`Mensajito ${cont}`);
// }
// //hacer una tabla de multiplicar
// //ingresa el numero
// //ingresa el numero limite que termina la tabla
// var nu1 = parseInt(prompt("Ingrese numero a multiplicar"));
// var lim = parseInt(prompt("Ingrese limite de la tabla"));
// for(var cont = 1; cont <= lim; cont += 1){
//     console.log(`${nu1} X ${cont} = ${nu1*cont}`);
// }


// var nu1 = parseInt(prompt("Ingrese numero de notas"));
// var nota = 0.00
// for(var cont = 1; cont <= nu1; cont += 1){
//     nota += parseInt(prompt("Ingrese la nota nro. " + cont));
//     if (cont == nu1){
//         console.log(`El promedio es ${nota/cont}`);
//     }
// }


var nvent = parseInt(prompt("Ingrese numero de ventas"));
var venta = 0.00;
var t1 = 0; 
var t2 = 0; 
var t3 = 0;
var tt1 = 0
var tt2 = 0;
var tt3 = 0;
for(var cont = 1; cont <= nvent; cont += 1){
    venta = parseFloat(prompt("Ingrese la venta nro. " + cont));
    if (venta > 1000){
        t1 += 1;
        tt1 += venta;
    }
    else{
        if (venta > 500 && venta <= 1000){
            t2 += 1;
            tt2 += venta;
        }
        else{
            t3 += 1;
            tt3 += venta;
        }    
    }
}
console.log(`la venta mayor a 1000 es ${tt1} en ${t1} ventas.`);
console.log(`la venta entre 500 y 1000 es ${tt2} en ${t2} ventas.`);
console.log(`la venta menor a 500 es ${tt3} en ${t3} ventas.`);
console.log(`el total de las ventas es ${tt3+tt2+tt1}`);
