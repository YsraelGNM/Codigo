//Objetos
var persona = {
    nombre: "ysrael",
    edad: 41,
    dni: "12345678"
}  //todo esto es un JSON osea los objetos con json

console.log(persona);

var vehiculo = {
    placa: "C7M-466",
    marca: "BMW",
    color:{
        color1: "negro",
        color2: "plateado"
    },
    propietarios:[
        {
            nombre:"Jorge",
            fecha:"2015"
        },
        {
            nombre:"Daniel",
            fecha:"2018"
        }
    ]
}

vehiculo.propietarios.forEach(duenio => {
    console.log(duenio.nombre);    
});

console.log(vehiculo.color.color2);
