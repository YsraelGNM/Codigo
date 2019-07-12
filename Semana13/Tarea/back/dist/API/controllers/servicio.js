"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
exports.servicio_controller = {
    getAll: function (req, res) {
        sequelize_1.Servicio.findAll().then(function (servicios) {
            /////
            servicios.forEach(function (element) {
                element.mostrarIdYNombre();
            });
            /////////////////////
            var response = {
                message: 'ok',
                content: servicios
            };
            res.status(200).json(response);
        }).catch(function (error) {
            console.log(error);
        });
    },
    create: function (req, res) {
        var _a = req.body, serv_nom = _a.serv_nom, serv_desc = _a.serv_desc;
        var objServicio = {
            serv_nom: serv_nom,
            serv_desc: serv_desc
        };
        sequelize_1.Servicio.create(objServicio).then(function (servicio_creado) {
            if (servicio_creado) {
                var response = {
                    message: 'created',
                    content: servicio_creado
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
    },
    getById: function (req, res) {
        var serv_id = req.params.serv_id;
        sequelize_1.Servicio.findById(serv_id).then(function (servicio_encontrado) {
            if (servicio_encontrado) {
                var response = {
                    message: 'found',
                    content: servicio_encontrado
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
        var _b = req.body, serv_nom = _b.serv_nom, serv_desc = _b.serv_desc;
        var serv_id = req.params.serv_id;
        var Op = Sequelize.Op;
        // let objServicio = {
        //     serv_nom:serv_nom,
        //     serv_desc:serv_desc
        // };
        sequelize_1.Servicio.update({
            serv_nom: serv_nom,
            serv_desc: serv_desc
        }, {
            where: {
                serv_id: (_a = {},
                    _a[Op.eq] = serv_id,
                    _a)
            }
        }).then(function (servicio_modificado) {
            if (servicio_modificado) {
                var response = {
                    message: 'modified',
                    content: servicio_modificado
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
    },
    Eliminar: function (req, res) {
        var serv_id = req.params.serv_id;
        sequelize_1.Servicio.destroy({
            where: {
                serv_id: serv_id
            }
        }).then(function (servicio_eliminado) {
            if (servicio_eliminado) {
                var response = {
                    message: 'deleted',
                    content: servicio_eliminado
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
