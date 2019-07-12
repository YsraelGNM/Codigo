"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importando las rutas
const servicio_1 = require("./API/routes/servicio");
const playa_1 = require("./API/routes/playa");
const sequelize_1 = require("./API/config/sequelize");
const registro_1 = require("./API/routes/registro");
const auth_1 = require("./API/routes/auth");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PUERTO = process.env.PORT || 3000;
//Configurando el CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET, POST');
    next();
});
//usando las rutas importadas
app.use('/api', servicio_1.servicio_router);
app.use('/api', playa_1.playa_router);
app.use('/api', registro_1.registro_router);
app.use('/api', auth_1.auth_router);
app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en Puerto 3000");
    //force=> true cada vez que el proyecto inicie, se van a eliminar todas las tablas, contenido y relaciones que haya, para crear nuevamente
    //force=> false cada vez cuando el proyecto inicie no borrara una tabla de la base de datos, sin embargo si tenemos una tabla recientemente creada la crea en la base de datos.
    sequelize_1.sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con exito.");
    }).catch((error) => {
        console.log(error);
    });
});
