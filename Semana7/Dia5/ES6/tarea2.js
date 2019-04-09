let cliente = [

    {
        id:1,
        nombre: "Ysrael",
    },
    {
        id:2,
        nombre: "Carlos",
    },
    {
        id:3,
        nombre: "Maria",
    },
    {
        id:4,
        nombre: "Javier",
    }
]

let factura = [

    {
        id:1,
        cliente:1
    },
    {
        id:2,
        cliente:1,
    },
    {
        id:3,
        cliente:2,
    },
]

let facturadetalle = [
    {
        id:1,
        factura:1,
        articulo:"LLave",
        cantidad: 15,
        preciounitario: 15.60
    },
    {
        id:2,
        factura:1,
        articulo:"Precinto",
        cantidad: 14,
        preciounitario: 50.60
    },
    {
        id:3,
        factura:2,
        articulo:"Sello",
        cantidad: 150,
        preciounitario: 7.60
    },
    {
        id:4,
        factura:3,
        articulo:"Seguro",
        cantidad: 1500,
        preciounitario: 77.60
    }
]

let getClienteById = (id) => {
    return new Promise((resolve,reject)=>{
        try{
            for (let index = 0; index < cliente.length; index++) {
                if (cliente[index].id == id){
                    resolve(cliente[index]);
                    return
                };
            }
        }
        catch(e){
            reject("error, no se encontro el cliente")
        }
    })
}

let getFacturasByIdCliente = (objCliente) => {
    return new Promise((resolve,reject)=>{
        try{
            for (let index = 0; index < factura.length; index++) {
                if (factura[index].cliente == objCliente.id){
                    resolve(factura[index]);
                    return
                };
            }
        }
        catch(e){
            reject("error, no se encontro la factura")
        }
    })
}

let getFacturaDetalleByIdFactura = (objFactura) => {
    return new Promise((resolve,reject)=>{
        try{
            for (let index = 0; index < facturadetalle.length; index++) {
                if (facturadetalle[index].factura == objFactura.id){
                    resolve(facturadetalle[index]);
                    return
                };
            }
        }
        catch(e){
            reject("error, no se encontro el detalle de factura")
        }
    })
}

getClienteById(2).then((respuesta)=>{
    console.log(respuesta);
    getFacturasByIdCliente(respuesta).then((respuesta)=>{
        console.log(respuesta);
        getFacturaDetalleByIdFactura(respuesta).then((respuesta)=>{
            console.log(respuesta);
        }).catch((respuesta)=>{
            console.log(respuesta);
        })
    }).catch((respuesta)=>{
        console.log(respuesta);
    })
}).catch((respuesta)=>{
    console.log(respuesta);
})
