"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("../models/usuario");
var tienda_1 = require("../models/tienda");
var venta_1 = require("../models/venta");
var Sequelize = require('sequelize');
exports.sequelize = new Sequelize('Mall', 'root', 'Ml310.2014', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Usuario = usuario_1.usuario_model(exports.sequelize, Sequelize);
exports.Tienda = tienda_1.tienda_model(exports.sequelize, Sequelize);
exports.Venta = venta_1.venta_model(exports.sequelize, Sequelize);
//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
exports.Venta.belongsTo(exports.Tienda, { foreignKey: 'idtienda' });
exports.Tienda.hasMany(exports.Venta, { foreignKey: 'idtienda' });
exports.Venta.belongsTo(exports.Usuario, { foreignKey: 'email' });
exports.Usuario.hasMany(exports.Venta, { foreignKey: 'email' });
