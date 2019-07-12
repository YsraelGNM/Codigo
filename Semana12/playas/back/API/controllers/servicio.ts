//servicio controllers
import {Request,Response} from 'express';
import {Servicio} from '../config/sequelize';

var Sequelize = require('sequelize');

export var servicio_controller = {
    getAll:(req:Request,res:Response)=>{
        Servicio.findAll().then((servicios:any)=>{
            /////
            servicios.forEach((element:any) => {
                element.mostrarIdYNombre();
            });
            /////////////////////
            let response = {
                message: 'ok'
                ,content:servicios
            };
            res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    create: (req:Request,res:Response)=>{
        let {serv_nom, serv_desc} = req.body;
        let objServicio = {
            serv_nom:serv_nom,
            serv_desc:serv_desc
        };
        Servicio.create(objServicio).then((servicio_creado:any)=>{
            if(servicio_creado){
                let response = {
                    message:'created'
                    ,content:servicio_creado
                }
                res.status(201).json(response);
            }else{
                let response = {
                    message:'error'
                    ,content:null
                };
                res.status(500).json(response);
            }
        })
    },

    getById:(req:Request,res:Response)=>{
        let {serv_id} = req.params;
        Servicio.findById(serv_id).then((servicio_encontrado:any)=>{
            if(servicio_encontrado){
                let response = {
                    message:'found'
                    ,content:servicio_encontrado
                }
                res.status(200).json(response);
            }else{
                let response = {
                    message:'not found'
                    ,content:null
                };
                res.status(204).json(response);
            }
        })
    },

    upDate:(req:Request,res:Response)=> {
        let {serv_nom, serv_desc} = req.body;
        let {serv_id} = req.params;
        const Op = Sequelize.Op;
        // let objServicio = {
        //     serv_nom:serv_nom,
        //     serv_desc:serv_desc
        // };
        Servicio.update({
            serv_nom: serv_nom,
            serv_desc: serv_desc
          }, {
            where: {
              serv_id: {
                [Op.eq]: serv_id
              }
            }
          }).then((servicio_modificado:any)=>{
            if(servicio_modificado){
                let response = {
                    message:'modified'
                    ,content:servicio_modificado
                }
                res.status(201).json(response);
            }else{
                let response = {
                    message:'error'
                    ,content:null
                };
                res.status(500).json(response);
            }
        })
    },

    Eliminar:(req:Request,res:Response)=>{
        let {serv_id} = req.params;
        Servicio.destroy({
            where: {
              serv_id: serv_id
            }
          }).then((servicio_eliminado:any)=>{
            if(servicio_eliminado){
                let response = {
                    message:'deleted'
                    ,content:servicio_eliminado
                }
                res.status(201).json(response);
            }else{
                let response = {
                    message:'error'
                    ,content:null
                };
                res.status(500).json(response);
            }
        })
    }
}
