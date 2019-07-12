import express from 'express';
import { Request,Response,NextFunction } from 'express';
import {usuario_router} from '../routes/Usuario'
import mongoose from 'mongoose';
import { video_router } from '../routes/Video';


export class Server{

    public app:express.Application;
    public puerto:any;
    public conexion:any;

    constructor(){
        this.app = express();
        //Configurando el CORS
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Headers','Content-type, Authorization');
            res.header('Access-Control-Allow-Methods','GET, POST, DELETE');
            res.header('Allow','GET, POST, DELETE');
            next();
        })

        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
        this.conectarMongo();
    }

    conectarMongo(){
        mongoose.connect('mongodb://localhost:27017/codigovirtual')
        this.conexion = mongoose.connect;
    }

    configurarBodyParser(){
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
    }


    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corre correctamente.");
        })
    }

    asignarRutas(){
        this.app.get('/',(req,res)=>{
            res.send("Buenas")
        });

        this.app.use('/api',usuario_router)
        this.app.use('/api',video_router)
    }





}