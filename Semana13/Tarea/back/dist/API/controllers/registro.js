"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
//var Moment = require('moment'); lo estoy usando de forma directa
var Op = Sequelize.Op;
exports.registro_controller = {
    getAllRegistrosBySlotId: function (req, res) {
        var _a;
        var slotId = req.params.slotId;
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Registro.findAll({ where: { slotp_id: (_a = {}, _a[Op.eq] = slotId, _a) },
            include: [{
                    model: sequelize_1.Slotplaya
                }]
        }).then(function (registro) {
            var response = {
                message: 'ok',
                content: registro
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    getAllRegistrosBySlotIdbyDate: function (req, res) {
        var _a;
        var slotId = req.params.slotId;
        var fech = req.params.date;
        //console.log("Fecha que se manda es..........................................................");
        //console.log(fech);
        //var fechita = Moment(fech, "YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD');
        //var fechita = Moment();
        //console.log(fechita);
        // return;
        //Playa.findById(playaid).then((playa:any)=>{
        sequelize_1.Registro.findAll({ where: {
                slotp_id: slotId,
                reg_fechin: (_a = {}, _a[Op.gte] = require('moment')(fech).format('YYYY-MM-DD'), _a[Op.lt] = require('moment')(fech).add(1, 'days').format('YYYY-MM-DD'), _a)
            },
            include: [{
                    model: sequelize_1.Slotplaya
                }]
        }).then(function (registro) {
            var response = {
                message: 'ok',
                content: registro
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
};
