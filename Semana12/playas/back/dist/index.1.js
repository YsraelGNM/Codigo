"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let controladorgeneral = {
    prueba: (req, res) => {
        // res.json({nombre:'Ysrael',
        //             apellido:'Nuñez'});
        let miNombre = req.body.nombre;
        let miDireccion = req.body.direccion;
        res.json({ nombrerecibido: miNombre,
            direccionrecibida: miDireccion });
    },
    ejemplo: (req, res) => {
        res.json({ edad: '41',
            talla: '1.75' });
    },
    getVehiculo: (req, res) => {
        let id = req.params.vehiculo_id;
        res.json({ id_recibido: id });
    },
    wachiman: (req, res, next) => {
        let rol = req.body.rol;
        if (rol == 1) {
            //Pase a la siguiente function
            next();
        }
        else {
            res.json({ error: "No estas autorizado." });
        }
    },
    cambiarPassword(req, res) {
        res.json({ resultado: "Contraseña cambiada" });
    }
};
app.get('/traerVehiculo/:vehiculo_id', controladorgeneral.getVehiculo);
app.post('/cambiarpassword/', controladorgeneral.wachiman, controladorgeneral.cambiarPassword);
app.listen(3000, function () {
    console.log("Servidor corriendo correctamente en Puerto 3000");
});
