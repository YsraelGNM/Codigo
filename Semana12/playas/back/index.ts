//Importando las rutas
import {servicio_router} from './API/routes/servicio'
import {playa_router} from './API/routes/playa'
import {sequelize} from './API/config/sequelize';
import { registro_router } from './API/routes/registro';
import { auth_router } from './API/routes/auth';
import { Request,Response,NextFunction } from 'express';


var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 3000;


//Configurando el CORS
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Content-type, Authorization');
    res.header('Access-Control-Allow-Methods','GET,POST');
    res.header('Allow','GET, POST');
    next();
})



//usando las rutas importadas
app.use('/api',servicio_router)
app.use('/api',playa_router)
app.use('/api',registro_router)
app.use('/api',auth_router)






app.listen(PUERTO,function() {
    console.log("Servidor corriendo correctamente en Puerto 3000");
    //force=> true cada vez que el proyecto inicie, se van a eliminar todas las tablas, contenido y relaciones que haya, para crear nuevamente
    //force=> false cada vez cuando el proyecto inicie no borrara una tabla de la base de datos, sin embargo si tenemos una tabla recientemente creada la crea en la base de datos.
    sequelize.sync({force:false}).then(()=>{
        console.log("Base de datos creada con exito.");    
    }).catch((error:any)=>{
        console.log(error);
    });
})