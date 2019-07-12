import {Tienda, Venta} from '../API/config/sequelize';


export class mFunciones{
    public lista:any;

    constructor(){
        this.getTiendas();
    }

    getTiendas(){
        Tienda.findAll().then((respuesta:any)=>{
            this.lista = respuesta;
        })
    }

    createVenta(objVenta){
        Venta.create(objVenta).then((venta_creado:any)=>{

        })
    }
}