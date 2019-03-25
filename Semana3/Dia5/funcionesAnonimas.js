'use strict'

var anonima = function (a,b) {
    return (a+b);
}(4,9);

console.log(anonima);


function mFuncion(nombre, mcallback) {
    let nombres = ['Karla','Gabriela','Ximena'];
    for (var i=0 ; i < 3 ; i++){
        if(nombres[i] == nombre){
            mcallback(true,i)
            return;
        }
    }
    mcallback(false, -1)
}

