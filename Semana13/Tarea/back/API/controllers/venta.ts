//registro controllers
import {Request,Response} from 'express';
import {Venta} from '../config/sequelize';

var Sequelize = require('sequelize');
//var Moment = require('moment'); lo estoy usando de forma directa
const Op = Sequelize.Op;


export var venta_controller = {
    getAllVentas:(req:Request,res:Response)=>{
        Venta.findAll().then((venta:any)=>{
            let response = {
                message: 'ok'
                ,content:venta
            };
            res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    getAllVentasConsolidado:(req:Request,res:Response)=>{
        Venta.findAll({
                        group: [Sequelize.fn('date_trunc', 'day', Sequelize.col('fecha'))]
                    }).then((venta:any)=>{
                        let response = {
                            message: 'ok'
                            ,content:venta
                        };
                        res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    create: (req:Request,res:Response)=>{
        let {monto, fecha, idtienda} = req.body;
        let objVenta = {
            monto:monto,
            fecha:fecha,
            idtienda:idtienda
        };

        Venta.create(objVenta).then((venta_creado:any)=>{
            if(venta_creado){
                let response = {
                    message:'created'
                    ,content:venta_creado
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

        //res.status(201).json(objVenta);


    },

    getById:(req:Request,res:Response)=>{
        let {idventa} = req.params;
        Venta.findByPk(idventa).then((venta_encontrado:any)=>{
            if(venta_encontrado){
                let response = {
                    message:'found'
                    ,content:venta_encontrado
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
        let {monto, fecha, idtienda} = req.body;
        let {idventa} = req.params;
        const Op = Sequelize.Op;
        // // let objServicio = {
        // //     serv_nom:serv_nom,
        // //     serv_desc:serv_desc
        // // };

        Venta.update({
            monto: monto,
            fecha: fecha,
            idtienda: idtienda
          }, {
            where: {
              idventa: {
                [Op.eq]: idventa
              }
            }
          }).then((venta_modificado:any)=>{
            if(venta_modificado){
                let response = {
                    message:'modified'
                    ,content:venta_modificado
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
        //res.status(201).json({});
    },

    Eliminar:(req:Request,res:Response)=>{
        let {idventa} = req.params;
        Venta.destroy({
            where: {
              idventa: idventa
            }
          }).then((venta_eliminado:any)=>{
            if(venta_eliminado){
                let response = {
                    message:'deleted'
                    ,content:venta_eliminado
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
