//tienda controllers
import {Request,Response} from 'express';
import {Tienda} from '../config/sequelize';

var Sequelize = require('sequelize');

export var tienda_controller = {

    getAllTiendas:(req:Request,res:Response)=>{
        Tienda.findAll().then((respuesta:any)=>{
            let response = {
                message:'ok',
                content:respuesta,
            };
            res.status(200).json(response);
        })
    }
}
