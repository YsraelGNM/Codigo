var cadena = "TECSUP pasion por la tecnologia";
document.write(`<p>${cadena.length}</p>`);

//////////

var cant = 0;
var cadena1 = cadena.split("");
cadena1.forEach(letra => {
    if(letra.toLocaleLowerCase() == "a" || letra.toLocaleLowerCase() == "e" || letra.toLocaleLowerCase() == "i" || letra.toLocaleLowerCase() == "o" || letra.toLocaleLowerCase() == "u"){
        cant++;
    }
});

console.log(cant);

////
console.log(cadena);
var posicion = "";
for(i=0; i<(cadena1.length/2); i++){
    posicion = cadena1[i];
    cadena1[i] = cadena1[(cadena1.length-1)-i]
    cadena1[(cadena1.length-1)-i] = posicion;
}
var cadena2 = ""
for(i=0; i<cadena1.length; i++){
    cadena2 = cadena2 + cadena1[i];
}
console.log(cadena2);


////
cadena = "TECSUP pasion por la tecnologia TECSUP pasion por la tecnologia TECSUP pasion por la tecnologia"
var cont = 0;
var indice = 0;
var buscar = "pasion"; //hay error
while(cadena.includes(buscar,indice)){
    indice = cadena.indexOf(buscar)+1;
    cont++;
}
console.log(cont);


////
var cant = 0;
cadena = "anita lava la tina"
var cadena1 = cadena.split(" ");
cadena = "";
cadena1.forEach(letra => {
    cadena = cadena + letra;
});
var cadena1 = cadena.split("");
var flag = true;
for(i=0; i<(cadena1.length/2); i++){
    if (cadena1[i] != cadena1[(cadena1.length-1)-i]){
        flag = false;
    }    
}
console.log(`La cadena es ${flag}`);


/////
var cant = 0;
cadena = "curso de java"
var cadena1 = cadena.split(" ");
cadena = "";
for(i=0;i<=cadena1.length-1;i++){
    cadena = cadena + " " +  cadena1[i].charAt(0).toUpperCase() + cadena1[i].slice(1);
}
console.log(cadena);

