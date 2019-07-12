//registro controllers
import {Request,Response} from 'express';
import {Registro, Slotplaya} from '../config/sequelize';

var Sequelize = require('sequelize');
//var Moment = require('moment'); lo estoy usando de forma directa
const Op = Sequelize.Op;


export var registro_controller = {
    getAllRegistrosBySlotId:(req:Request,res:Response)=>{
        let slotId = req.params.slotId;

        //Playa.findById(playaid).then((playa:any)=>{
        Registro.findAll({where:{slotp_id:{[Op.eq]:slotId}}
            ,include:[{
                model:Slotplaya
            }]
                        }).then((registro:any)=>{
            let response = {
                message: 'ok'
                ,content:registro
            };
            res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    getAllRegistrosBySlotIdbyDate:(req:Request,res:Response)=>{
        let slotId = req.params.slotId;
        let fech = req.params.date;

        //console.log("Fecha que se manda es..........................................................");
        //console.log(fech);
        //var fechita = Moment(fech, "YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD');
        //var fechita = Moment();
        //console.log(fechita);
       // return;
        
        
        //Playa.findById(playaid).then((playa:any)=>{
        Registro.findAll({where:{
            slotp_id:slotId
            ,reg_fechin:{[Op.gte]:require('moment')(fech).format('YYYY-MM-DD')
                            //,[Op.lt]: Moment(fech, "YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD')}
                        ,[Op.lt]: require('moment')(fech).add(1,'days').format('YYYY-MM-DD')}
        } 
            ,include:[{
                model:Slotplaya
            }]
                        }).then((registro:any)=>{
            let response = {
                message: 'ok'
                ,content:registro
            };
            res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    // create: (req:Request,res:Response)=>{
    //     let {serv_nom, serv_desc} = req.body;
    //     let objServicio = {
    //         serv_nom:serv_nom,
    //         serv_desc:serv_desc
    //     };
    //     Servicio.create(objServicio).then((servicio_creado:any)=>{
    //         if(servicio_creado){
    //             let response = {
    //                 message:'created'
    //                 ,content:servicio_creado
    //             }
    //             res.status(201).json(response);
    //         }else{
    //             let response = {
    //                 message:'error'
    //                 ,content:null
    //             };
    //             res.status(500).json(response);
    //         }
    //     })
    // },

    // getById:(req:Request,res:Response)=>{
    //     let {serv_id} = req.params;
    //     Servicio.findByPk(serv_id).then((servicio_encontrado:any)=>{
    //         if(servicio_encontrado){
    //             let response = {
    //                 message:'found'
    //                 ,content:servicio_encontrado
    //             }
    //             res.status(200).json(response);
    //         }else{
    //             let response = {
    //                 message:'not found'
    //                 ,content:null
    //             };
    //             res.status(204).json(response);
    //         }
    //     })
    // },

    // upDate:(req:Request,res:Response)=> {
    //     let {serv_nom, serv_desc} = req.body;
    //     let {serv_id} = req.params;
    //     const Op = Sequelize.Op;
    //     // let objServicio = {
    //     //     serv_nom:serv_nom,
    //     //     serv_desc:serv_desc
    //     // };
    //     Servicio.update({
    //         serv_nom: serv_nom,
    //         serv_desc: serv_desc
    //       }, {
    //         where: {
    //           serv_id: {
    //             [Op.eq]: serv_id
    //           }
    //         }
    //       }).then((servicio_modificado:any)=>{
    //         if(servicio_modificado){
    //             let response = {
    //                 message:'modified'
    //                 ,content:servicio_modificado
    //             }
    //             res.status(201).json(response);
    //         }else{
    //             let response = {
    //                 message:'error'
    //                 ,content:null
    //             };
    //             res.status(500).json(response);
    //         }
    //     })
    // },

    // Eliminar:(req:Request,res:Response)=>{
    //     let {serv_id} = req.params;
    //     Servicio.destroy({
    //         where: {
    //           serv_id: serv_id
    //         }
    //       }).then((servicio_eliminado:any)=>{
    //         if(servicio_eliminado){
    //             let response = {
    //                 message:'deleted'
    //                 ,content:servicio_eliminado
    //             }
    //             res.status(201).json(response);
    //         }else{
    //             let response = {
    //                 message:'error'
    //                 ,content:null
    //             };
    //             res.status(500).json(response);
    //         }
    //     })
    // }
}
