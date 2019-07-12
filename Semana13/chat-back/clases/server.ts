import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { Request,Response,NextFunction } from 'express';
import { Cliente } from './cliente';
import { Clientes } from './clientes';


interface mensaje{
    de:string,
    para:string,
    mensaje:string
}

export class Server{

    public app:express.Application;
    public puerto:any;
    public httpServer:http.Server;
    public io:socketIO.Server;
    public clientes:Clientes = new Clientes();

    constructor(){
        this.app = express();
        //Configurando el CORS
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            res.header('Access-Control-Allow-Origin','http://localhost:4200');
            res.header('Access-Control-Allow-Headers','Content-type, Authorization');
            res.header('Access-Control-Allow-Methods','GET,POST');
            res.header('Allow','GET, POST');
            next();
        })

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
    }

    configurarBodyParser(){
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
    }


    start(){
        this.httpServer.listen(this.puerto,()=>{
            console.log("Servidor corre correctamente.");
        })
    }

    asignarRutas(){
        this.app.get('/',(req,res)=>{
            res.send("Buenas")
        });

        this.app.post('/enviar-mensaje',(req,res)=>{
            let {de,para,mensaje} = req.body;
            let content = {
                mensaje:mensaje,
                nombre:de
            }
            this.io.to(para).emit('nuevo-mensaje',content);
            res.status(200).send('');
        })
    }

    escucharSockets(){
        console.log("escuchando sockets");
        this.io.on('connect',(cliente)=>{
            console.log('alguien se conectó');
            console.log(cliente.id);
            let objCliente = new Cliente(cliente.id);
            this.clientes.add(objCliente);
            console.log('nueva lista de conectados');
            console.log(this.clientes.getClientes());
            
            

            cliente.on('disconnect',()=>{
                console.log('el cliente se desconecto');
                this.clientes.remove(cliente.id);
                this.io.emit('retorno-usuarios',this.clientes.getClientes());
                console.log('nueva lista de conectados');
                console.log(this.clientes.getClientes());
            })

            cliente.on('configurar-usuario',(data)=>{
                let objCliente = new Cliente(cliente.id);
                objCliente.nombre = data;
                this.clientes.update(objCliente);
                this.io.emit('retorno-usuarios',this.clientes.getClientes());

                // this.clientes.lista.forEach(element => {
                //     if(element.id === cliente.id){
                //         element.nombre = data;
                //     }
                // });

                console.log('nueva lista de conectados');
                console.log(this.clientes.getClientes());
            })

            cliente.on('lista-usuarios',()=>{
                this.io.emit('retorno-usuarios',this.clientes.getClientes());
            })

            cliente.on('enviar-mensaje',(mensaje)=>{
                let objCliente:any = this.clientes.getClienteById(cliente.id);
                let content={
                    mensaje:mensaje,
                    nombre: objCliente.nombre
                }
                this.io.emit('nuevo-mensaje',content)

                //Cuando el cliente quiere emitir evento a todos excepto a el
                //cliente.broadcast.emit('nuevo-mensaje',content)
            })


           


            
        })
    }







}