

var clasemascota = function (apodo) {
    var mascota = {
        nombre: "chancho",
        raza: "Bull Terrier",
        nombrecompleto: function () {
            console.log(`El nombre es ${this.nombre}`);
        },
        nombreYRaza: function() {
            return `Nombre => ${this.nombre} Raza => ${this.raza}`
        },
        nuevoNombre: function(name){
            this.nombre = name;
        }
    };

    return mascota;
}

var fido = clasemascota("Tony");
console.log(fido.nombrecompleto());
fido.nuevoNombre("Fido");
console.log(fido.nombrecompleto());

//////////////////////////////////////////////////////////////////////////////

var mPersona = function (fNombre, fEdad, fDni, fPeso, fAltura) {
    var persona = {
        nombre: fNombre,
        edad: fEdad,
        dni: fDni,
        peso: fPeso,
        altura: fAltura,
        indiceMasaCorporal: function () {
            return this.peso/(this.altura)^2;
        },
        esMayorDeEdad: function() {
            return this.edad >= 18 ? true : false;
        },
        toString: function() {
            console.log(`Nombre: ${this.nombre} ; edad ${this.edad} ; dni ${this.dni} ; peso ${this.peso} ; altura ${this.altura}`);
        }
    };

    return persona;
        
}

/////////////////////////////////////////////////////////////////////////////////

var mElectrodomestico = function (fPrecioBase, fColor, fConsumo, fPeso) {
    var electrodomestico = {
        preciobase: fPrecioBase,
        color: fColor,
        consumo: fConsumo,
        peso: fPeso,
        categoriaConsumo: function () {
            if(this.consumo == "A"){
                return 100;
            }
            else{
                if(this.consumo == "B"){
                    return 80;
                }
                else
                {
                    return 70;
                }
            }
        },
        tamanio: function() {
            if(this.peso > 79){
                return 100;
            }
            else{
                if(this.peso >= 50 && this.peso <= 79){
                    return 80;
                }
                else
                if(this.peso >= 20 && this.peso < 50){
                    return 50;
                }
                else
                {
                    return 10;
                }
            }
        },
        precioFinal: function() {
            return this.consumo + this.tamanio;
        }
    };

    return electrodomestico;
        
}


//////////////////////////////////////////////////////////////////////////////

var mSerie = function (fTitulo, fnroTemporadas, fAlquilado, fGenero, fCreador) {
    var serie = {
        titulo: fTitulo,
        nroTemporadas: fnroTemporadas,
        alquilado: fAlquilado,
        genero: fGenero,
        creador: fCreador,
        verInfoDeTemporada: function (index) {
            console.log(this.nroTemporada[index]);
            ;
        },
        alquilar: function() {
            if(this.alquilado){
                console.log("Error: Ya esta alquilado");
            }
            else{
                this.alquilado = true;
                console.log("Alquilado");
                
            }
        },
        toString: function() {
            console.log(`Titulo: ${this.titulo} ; alquilado ${this.alquilado} ; genero ${this.genero} ; creador ${this.creador}`);
            this.nroTemporadas.forEach(Peli => {
                console.log(Peli);
                
            });
        }
    };

    return serie;
        
}