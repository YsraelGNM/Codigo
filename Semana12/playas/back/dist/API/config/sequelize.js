"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicio_1 = require("../models/servicio");
const playa_1 = require("../models/playa");
const playaservicio_1 = require("../models/playaservicio");
const registro_1 = require("../models/registro");
const slotplaya_1 = require("../models/slotplaya");
const usuario_1 = require("../models/usuario");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('playas', 'root', 'Ml310.2014', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Servicio = servicio_1.servicio_model(exports.sequelize, Sequelize);
exports.Playa = playa_1.playa_model(exports.sequelize, Sequelize);
exports.Playaservicio = playaservicio_1.playaserv_model(exports.sequelize, Sequelize);
exports.Registro = registro_1.registro_model(exports.sequelize, Sequelize);
exports.Slotplaya = slotplaya_1.slotplaya_model(exports.sequelize, Sequelize);
exports.Usuario = usuario_1.usuario_model(exports.sequelize, Sequelize);
//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
exports.Playaservicio.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.Playa.hasMany(exports.Playaservicio, { foreignKey: 'playa_id' });
exports.Playaservicio.belongsTo(exports.Servicio, { foreignKey: 'serv_id' });
exports.Servicio.hasMany(exports.Playaservicio, { foreignKey: 'serv_id' });
exports.Registro.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.Registro, { foreignKey: 'usu_id' });
exports.Registro.belongsTo(exports.Slotplaya, { foreignKey: 'slotp_id' });
exports.Slotplaya.hasMany(exports.Registro, { foreignKey: 'slotp_id' });
exports.Slotplaya.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.Playa.hasMany(exports.Slotplaya, { foreignKey: 'playa_id' });
