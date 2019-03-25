var personas = [];
//var persona = new Array();
//persona["nombre"] = "Ysrael";
//persona["edad"] = 41;
//persona["dni"] = "29728069"
//console.log(`el nombre es ${persona["nombre"]}`);

var n = +prompt("Cuantas personas va a ingresar.")



for(i = 0; i<n;i++){
    var persona = [];
    persona["nombre"] = +prompt("Ingrese el nombre.")    ;
    persona["edad"] = +prompt("Ingrese la edad.")    ;
    //persona["dni"] = +prompt("Ingrese el dni.");
    personas.push(persona);
}

var edad_mayor = 0;
var edad_menor = 5000;
var persona_menor;
var persona_mayor;
personas.forEach(per => {
    if(edad_menor > per.edad){
        edad_menor = per.edad;
        persona_menor = per;
    }
    if(edad_mayor < per.edad){
        edad_mayor = per.edad;
        persona_mayor = per;
    }
});


console.log(persona_menor);
console.log(persona_mayor);

