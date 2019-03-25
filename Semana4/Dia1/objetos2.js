var mascota = {
    nombre:"Chancho",
    raza:"Bull Terrier",
    nombrecompleto: function () {
        console.log(`El nombre es ${this.nombre}`);
        
    },
    nombreYRaza: function() {
        return `Nombre => ${this.nombre} Raza => ${this.raza}`
    },
    nuevoNombre: function(name) {
        this.nombre = name;
    }
}

mascota.nombrecompleto();
console.log(mascota.nombreYRaza());
mascota.nuevoNombre("Firulais");
console.log(mascota.nombreYRaza());