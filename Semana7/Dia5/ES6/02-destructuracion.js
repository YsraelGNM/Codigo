let alumno = {
    nombre: "Ysrael",
    codigo: 1001,
    email: "ysraelnm@outlook.com",
    gustos:['Rock','Chicharron']
}

let nombre = alumno.nombre;
console.log(nombre);

var {codigo,gustos,email:correo} = alumno;
console.log(codigo);
console.log(gustos);
console.log(correo);

var usuario = {
    codigo:codigo,
    id: 9000,
    codigoYId: function() {
        console.log(`Codigo ${this.codigo} - Id ${this.id}`);
    }
}

console.log(usuario);
usuario.codigoYId();

// destructurando arrays 
let arreglo = [9,5,4,'otro gato'];
var [x,y,z,a] = arreglo;
var [primer,...resto] = arreglo;
console.log(a);
console.log(primer);
console.log(resto);
