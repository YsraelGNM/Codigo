"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
//var Moment = require('moment'); lo estoy usando de forma directa
const Op = Sequelize.Op;
exports.registro_controller = {
    getAllRegistrosBySlotId: (req, res) => {
        let slotId = req.params.slotId;
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Registro.findAll({ where: { slotp_id: { [Op.eq]: slotId } },
            include: [{
                    model: sequelize_1.Slotplaya
                }]
        }).then((registro) => {
            let response = {
                message: 'ok',
                content: registro
            };
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error);
        });
    },
    getAllRegistrosBySlotIdbyDate: (req, res) => {
        let slotId = req.params.slotId;
        let fech = req.params.date;
        //console.log("Fecha que se manda es..........................................................");
        //console.log(fech);
        //var fechita = Moment(fech, "YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD');
        //var fechita = Moment();
        //console.log(fechita);
        // return;
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Registro.findAll({ where: {
                slotp_id: slotId,
                reg_fechin: { [Op.gte]: require('moment')(fech).format('YYYY-MM-DD')
                    //,[Op.lt]: Moment(fech, "YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD')}
                    ,
                    [Op.lt]: require('moment')(fech).add(1, 'days').format('YYYY-MM-DD') }
            },
            include: [{
                    model: sequelize_1.Slotplaya
                }]
        }).then((registro) => {
            let response = {
                message: 'ok',
                content: registro
            };
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error);
        });
    },
};
