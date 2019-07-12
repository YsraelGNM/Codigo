"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
//var Moment = require('moment'); lo estoy usando de forma directa
var Op = Sequelize.Op;
exports.venta_controller = {
    getAllVentas: function (req, res) {
        sequelize_1.Venta.findAll().then(function (venta) {
            var response = {
                message: 'ok',
                content: venta
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    getAllVentasConsolidado: function (req, res) {
        sequelize_1.Venta.findAll({
            group: [Sequelize.fn('date_trunc', 'day', Sequelize.col('fecha'))]
        }).then(function (venta) {
            var response = {
                message: 'ok',
                content: venta
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    create: function (req, res) {
        var _a = req.body, monto = _a.monto, fecha = _a.fecha, idtienda = _a.idtienda;
        var objVenta = {
            monto: monto,
            fecha: fecha,
            idtienda: idtienda
        };
        sequelize_1.Venta.create(objVenta).then(function (venta_creado) {
            if (venta_creado) {
                var response = {
                    message: 'created',
                    content: venta_creado
                };
                res.status(201).json(response);
            }
            else {
                var response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
        //res.status(201).json(objVenta);
    },
    getById: function (req, res) {
        var idventa = req.params.idventa;
        sequelize_1.Venta.findByPk(idventa).then(function (venta_encontrado) {
            if (venta_encontrado) {
                var response = {
                    message: 'found',
                    content: venta_encontrado
                };
                res.status(200).json(response);
            }
            else {
                var response = {
                    message: 'not found',
                    content: null
                };
                res.status(204).json(response);
            }
        });
    },
    upDate: function (req, res) {
        var _a;
        var _b = req.body, monto = _b.monto, fecha = _b.fecha, idtienda = _b.idtienda;
        var idventa = req.params.idventa;
        var Op = Sequelize.Op;
        // // let objServicio = {
        // //     serv_nom:serv_nom,
        // //     serv_desc:serv_desc
        // // };
        sequelize_1.Venta.update({
            monto: monto,
            fecha: fecha,
            idtienda: idtienda
        }, {
            where: {
                idventa: (_a = {},
                    _a[Op.eq] = idventa,
                    _a)
            }
        }).then(function (venta_modificado) {
            if (venta_modificado) {
                var response = {
                    message: 'modified',
                    content: venta_modificado
                };
                res.status(201).json(response);
            }
            else {
                var response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
        //res.status(201).json({});
    },
    Eliminar: function (req, res) {
        var idventa = req.params.idventa;
        sequelize_1.Venta.destroy({
            where: {
                idventa: idventa
            }
        }).then(function (venta_eliminado) {
            if (venta_eliminado) {
                var response = {
                    message: 'deleted',
                    content: venta_eliminado
                };
                res.status(201).json(response);
            }
            else {
                var response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    }
};
