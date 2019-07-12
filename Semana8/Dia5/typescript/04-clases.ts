class Vehiculo {
    public marca:string = "Defecto";
    private _id:number = 0;
    //public color:string = "";
    constructor(public color:string,
        public modelo:string){
            //this.color = color;
    }

    get id():number{
        return this._id;
    }
    set id(nuevoId:number){
        this._id = nuevoId;
    }

    public imprimirModeloYMarca():void{
        console.log(this.modelo + " " + this.marca);
    }

    private metodoPrivado(){
        console.log("Este es un metodo privado");
        
    }

    static obtenerFecha():Date{
        return new Date();
    }
}

let objVehiculo = new Vehiculo("Rojo","CX-3");
console.log(`Modelo ${objVehiculo.modelo}`);
objVehiculo.imprimirModeloYMarca();

objVehiculo.id = 90;
console.log(objVehiculo.id);

console.log(Vehiculo.obtenerFecha());



