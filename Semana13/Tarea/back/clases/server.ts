import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { Request,Response,NextFunction } from 'express';
import { sequelize } from '../API/config/sequelize';
import {venta_router} from '../API/routes/venta'
import { auth_router } from '../API/routes/auth';
import { tienda_router } from '../API/routes/tienda';
import { mFunciones } from './mfunciones';


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
    public mTienda:mFunciones = new mFunciones();

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
            sequelize.sync({force:false}).then(()=>{
                console.log("Base de datos creada con exito.");    
            }).catch((error:any)=>{
                console.log(error);
            });
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
        });

        this.app.use('',auth_router)
        this.app.use('',tienda_router)
        this.app.use('',venta_router);
    }

    escucharSockets(){
        console.log("escuchando sockets");
        this.io.on('connect',(cliente)=>{
            console.log('alguien se conectó');
            console.log(cliente.id);


            cliente.on('disconnect',()=>{
                console.log('el cliente se desconecto');
            })

            cliente.on('lista-tiendas',()=>{
                this.io.emit('retorno-tiendas',this.mTienda.lista);
            })

            cliente.on('enviar-venta',(objVenta)=>{
                this.mTienda.createVenta(objVenta);
            })


            
        })
    }







}