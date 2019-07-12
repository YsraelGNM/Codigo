"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
exports.servicio_controller = {
    getAll: (req, res) => {
        sequelize_1.Servicio.findAll().then((servicios) => {
            /////
            servicios.forEach((element) => {
                element.mostrarIdYNombre();
            });
            /////////////////////
            let response = {
                message: 'ok',
                content: servicios
            };
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error);
        });
    },
    create: (req, res) => {
        let { serv_nom, serv_desc } = req.body;
        let objServicio = {
            serv_nom: serv_nom,
            serv_desc: serv_desc
        };
        sequelize_1.Servicio.create(objServicio).then((servicio_creado) => {
            if (servicio_creado) {
                let response = {
                    message: 'created',
                    content: servicio_creado
                };
                res.status(201).json(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    },
    getById: (req, res) => {
        let { serv_id } = req.params;
        sequelize_1.Servicio.findById(serv_id).then((servicio_encontrado) => {
            if (servicio_encontrado) {
                let response = {
                    message: 'found',
                    content: servicio_encontrado
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'not found',
                    content: null
                };
                res.status(204).json(response);
            }
        });
    },
    upDate: (req, res) => {
        let { serv_nom, serv_desc } = req.body;
        let { serv_id } = req.params;
        const Op = Sequelize.Op;
        // let objServicio = {
        //     serv_nom:serv_nom,
        //     serv_desc:serv_desc
        // };
        sequelize_1.Servicio.update({
            serv_nom: serv_nom,
            serv_desc: serv_desc
        }, {
            where: {
                serv_id: {
                    [Op.eq]: serv_id
                }
            }
        }).then((servicio_modificado) => {
            if (servicio_modificado) {
                let response = {
                    message: 'modified',
                    content: servicio_modificado
                };
                res.status(201).json(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    },
    Eliminar: (req, res) => {
        let { serv_id } = req.params;
        sequelize_1.Servicio.destroy({
            where: {
                serv_id: serv_id
            }
        }).then((servicio_eliminado) => {
            if (servicio_eliminado) {
                let response = {
                    message: 'deleted',
                    content: servicio_eliminado
                };
                res.status(201).json(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    }
};
