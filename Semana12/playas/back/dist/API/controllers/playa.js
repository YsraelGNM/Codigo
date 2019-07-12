"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
exports.playa_controller = {
    getAllSlots: (req, res) => {
        let { playaid } = req.params;
        //res.status(200).json({playa: playaid});
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Playa.findAll({ where: { playa_id: playaid },
            include: [{
                    model: sequelize_1.Slotplaya,
                    where: { playa_id: playaid }
                }]
        }).then((playa) => {
            let response = {
                message: 'ok',
                content: playa
            };
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error);
        });
    },
    getAllSlotsByPlayaId: (req, res) => {
        const { playa_id } = req.params;
        sequelize_1.Playa.findAll({
            where: {
                playa_id: playa_id
            },
            include: [{
                    model: sequelize_1.Slotplaya,
                }]
        }).then((respuesta) => {
            let response = {
                message: 'ok',
                content: respuesta,
            };
            res.status(200).json(response);
        });
    },
    getAllPlayas: (req, res) => {
        sequelize_1.Playa.findAll({
            //     attributes:['playa_id','playa_nom','playa_lat','playa_lng','playa_dir',[sequelize.fn('COUNT','slotp_id'),'Slot_Count_Desocupados']],
            //     include:[{model:Slotplaya,
            //             attributes:[],
            //             where:{slotp_est:0}}]
            include: [sequelize_1.Slotplaya]
        }).then((respuesta) => {
            let response = {
                message: 'ok',
                content: respuesta,
            };
            res.status(200).json(response);
        });
    }
};
