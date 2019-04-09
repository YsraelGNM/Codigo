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

let getClienteById = (id,callback) => {
    for (let index = 0; index < cliente.length; index++) {
        if (cliente[index].id == id){
            callback(null,cliente[index]);
            return
        };
    }
    callback("error, no se encontro",null)
}

let getFacturasByIdCliente = (objCliente, callback) =>{
    for (let index = 0; index < factura.length; index++) {
        if (factura[index].cliente == objCliente.id){
            callback(null,factura[index]);
            return
        };
    }
    callback("error, no se encontro",null)
}

let getFacturaDetalleByIdFactura = (objFactura, callback) =>{
    for (let index = 0; index < facturadetalle.length; index++) {
        if (facturadetalle[index].factura == objFactura.id){
            callback(null,facturadetalle[index]);
            return
        };
    }
    callback("error, no se encontro",null)
}

getClienteById(1,(error,objCliente)=>{
    if (error){
        console.log(error);
    }else{
        getFacturasByIdCliente(objCliente,(error,objFactura)=>{
            if (error){
                console.log(error);
            }else{
                getFacturaDetalleByIdFactura(objFactura,(error,objdetallefactura)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.log(objCliente);
                        console.log(objFactura);
                        console.log(objdetallefactura);
                    }
                })
            }
        })
    }
})
