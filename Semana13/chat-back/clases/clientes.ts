import {Cliente} from './cliente';

export class Clientes{
    private lista:Cliente [] = [];

    add(cliente:Cliente){
        this.lista.push(cliente);
    }

    getClientes(){
        //return this.lista;
        return this.lista.filter((cliente)=>cliente.nombre != 'sin nombre');
    }

    remove(id:string){
        this.lista = this.lista.filter((cliente)=>cliente.id != id);
    }
    
    update(objCliente:Cliente){
        this.lista.forEach((cliente:Cliente)=>{
            if(cliente.id === objCliente.id){
                cliente.nombre = objCliente.nombre;
            }
        });
    }

    getClienteById(id:String){
        for (let index = 0; index < this.lista.length; index++) {
            if(this.lista[index].id === id){
                return this.lista[index];
            }
        }
    }



}