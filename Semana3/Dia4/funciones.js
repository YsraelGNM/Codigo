'use strict';
function miFuncion() {
    let a = 9; // cuando usas let deltro de {}, [] solo sirve ahi dentro
    console.log("Esta es una funcion");
}
miFuncion();

function potencia(base, exponente=1) {
    let resultado = base ** exponente;
    console.log(resultado);
}

potencia(2,4);
potencia(2,4,5);
potencia(2);

function spread(...elementos) {
    console.log(elementos);
}

spread(4,10,5,6,9,14);


function multiplicar(...elementos) {
    let resp = 1
    for(let cont = 0; cont < elementos.length; cont++){
        resp =  resp * elementos[cont];
    }
    return resp;
}
var res = multiplicar(2,5,2);
console.log(res);
console.log(multiplicar(2,2,2));

function sumar(a,b) {
    return a+b;
}
console.log(`El total es ${sumar(sumar(1,2),sumar(3,4))}`);


function mMult(a,b) {
    let resp = 0
    for(let cont = 1; cont <= b; cont++){
        resp =  resp + a;
    }
    return resp;
}
console.log(`El total es ${mMult(5,3)}`);


function mDiv(a,b) {
    let resp = [];
    let x = 0;
    while(a>b){
        a = a-b;
        x += 1;
    }
    resp[0] = x;
    resp[1] = a;
    return resp;
}
console.log(`El total es ${mDiv(29,3)}`);
