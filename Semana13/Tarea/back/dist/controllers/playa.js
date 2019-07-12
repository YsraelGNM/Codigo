"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
exports.playa_controller = {
    getAllSlots: function (req, res) {
        var playaid = req.params.playaid;
        //res.status(200).json({playa: playaid});
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Playa.findAll({ where: { playa_id: playaid },
            include: [{
                    model: sequelize_1.Slotplaya,
                    where: { playa_id: playaid }
                }]
        }).then(function (playa) {
            var response = {
                message: 'ok',
                content: playa
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    getAllSlotsByPlayaId: function (req, res) {
        var playa_id = req.params.playa_id;
        sequelize_1.Playa.findAll({
            where: {
                playa_id: playa_id
            },
            include: [{
                    model: sequelize_1.Slotplaya,
                }]
        }).then(function (respuesta) {
            var response = {
                message: 'ok',
                content: respuesta,
            };
            res.status(200).json(response);
        });
    },
    getAllPlayas: function (req, res) {
        sequelize_1.Playa.findAll({
            //     attributes:['playa_id','playa_nom','playa_lat','playa_lng','playa_dir',[sequelize.fn('COUNT','slotp_id'),'Slot_Count_Desocupados']],
            //     include:[{model:Slotplaya,
            //             attributes:[],
            //             where:{slotp_est:0}}]
            include: [sequelize_1.Slotplaya]
        }).then(function (respuesta) {
            var response = {
                message: 'ok',
                content: respuesta,
            };
            res.status(200).json(response);
        });
    }
};
