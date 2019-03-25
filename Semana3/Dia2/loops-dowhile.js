
// //hacer una tabla de multiplicar
// //ingresa el numero
// //ingresa el numero limite que termina la tabla
// var nu1 = parseInt(prompt("Ingrese numero a multiplicar"));
// var lim = parseInt(prompt("Ingrese limite de la tabla"));
// var cont = 1;
// while (cont <= lim){
//     console.log(`${nu1} X ${cont} = ${nu1*cont}`);
//     cont++;
// }

// //ingresa infinitos numeros del usuario
// //termina al negativo
// // y muestra el promedio
// var cont = 0;
// var lim = 0.00;
// var flag = true;
// while (flag){
//     var ing = parseInt(prompt("Ingrese numero"));
//     if (ing < 0){
//         flag = false;
//         break;
//     }
//     lim += ing
//     cont++;
// }
// console.log(`el promedio es ${lim/cont}`);

var cont = 0;
do{
    var contrasena = prompt("Ingrese su contraseña");
    if (contrasena != '123'){
        cont++;
    }else{
        break;
    }
}while(cont < 3);
console.log(`no hay mas intentos`);