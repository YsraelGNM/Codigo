import {servicio_model} from '../models/servicio';
import { playa_model } from '../models/playa';
import { playaserv_model } from '../models/playaservicio';
import { registro_model } from '../models/registro';
import { slotplaya_model } from '../models/slotplaya';
import { usuario_model } from '../models/usuario';

const Sequelize = require('sequelize');
export const sequelize = new Sequelize('playas','root','Ml310.2014',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00'
});

export const Servicio = servicio_model(sequelize,Sequelize);
export const Playa = playa_model(sequelize,Sequelize);
export const Playaservicio = playaserv_model(sequelize,Sequelize);
export const Registro = registro_model(sequelize,Sequelize);
export const Slotplaya = slotplaya_model(sequelize,Sequelize);
export const Usuario = usuario_model(sequelize,Sequelize);

//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
Playaservicio.belongsTo(Playa,{foreignKey:'playa_id'})
Playa.hasMany(Playaservicio,{foreignKey:'playa_id'})

Playaservicio.belongsTo(Servicio,{foreignKey:'serv_id'})
Servicio.hasMany(Playaservicio,{foreignKey:'serv_id'})

Registro.belongsTo(Usuario,{foreignKey:'usu_id'})
Usuario.hasMany(Registro,{foreignKey:'usu_id'})

Registro.belongsTo(Slotplaya,{foreignKey:'slotp_id'})
Slotplaya.hasMany(Registro,{foreignKey:'slotp_id'})

Slotplaya.belongsTo(Playa,{foreignKey:'playa_id'})
Playa.hasMany(Slotplaya,{foreignKey:'playa_id'})