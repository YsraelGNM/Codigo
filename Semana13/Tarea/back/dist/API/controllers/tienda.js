"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
exports.tienda_controller = {
    getAllTiendas: function (req, res) {
        sequelize_1.Tienda.findAll().then(function (respuesta) {
            var response = {
                message: 'ok',
                content: respuesta,
            };
            res.status(200).json(response);
        });
    }
};
