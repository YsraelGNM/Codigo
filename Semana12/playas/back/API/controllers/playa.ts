//playa controllers
import {Request,Response} from 'express';
import {Playa, Slotplaya} from '../config/sequelize';

var Sequelize = require('sequelize');

export var playa_controller = {
    getAllSlots:(req:Request,res:Response)=>{
        let {playaid} = req.params;

        //res.status(200).json({playa: playaid});

        //Playa.findById(playaid).then((playa:any)=>{
        Playa.findAll({where:{playa_id:playaid}
            ,include:[{
                model:Slotplaya
                ,where:{playa_id:playaid}
            }]
                        }).then((playa:any)=>{
            let response = {
                message: 'ok'
                ,content:playa
            };
            res.status(200).json(response);

        }).catch((error:any)=>{
            console.log(error);
            
        })
    },

    getAllSlotsByPlayaId:(req:Request,res:Response)=>{
        const {playa_id} = req.params;
        Playa.findAll({
            where:{
                playa_id:playa_id
            },
            include:[{
                model: Slotplaya,
            }]
        }).then((respuesta:any)=>{
            let response = {
                message:'ok',
                content:respuesta,
            };
            res.status(200).json(response);
        })
    },

    getAllPlayas:(req:Request,res:Response)=>{
        Playa.findAll({
            
        //     attributes:['playa_id','playa_nom','playa_lat','playa_lng','playa_dir',[sequelize.fn('COUNT','slotp_id'),'Slot_Count_Desocupados']],
        //     include:[{model:Slotplaya,
        //             attributes:[],
        //             where:{slotp_est:0}}]
            
            include:[Slotplaya]
        }).then((respuesta:any)=>{
            let response = {
                message:'ok',
                content:respuesta,
            };
            res.status(200).json(response);
        })
    }
}
