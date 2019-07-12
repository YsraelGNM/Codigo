import { usuario_model } from '../models/usuario';
import { tienda_model } from '../models/tienda';
import { venta_model } from '../models/venta';

const Sequelize = require('sequelize');
export const sequelize = new Sequelize('Mall','root','Ml310.2014',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00'
});

export const Usuario = usuario_model(sequelize,Sequelize);
export const Tienda = tienda_model(sequelize,Sequelize);
export const Venta = venta_model(sequelize,Sequelize);


//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
Venta.belongsTo(Tienda,{foreignKey:'idtienda'})
Tienda.hasMany(Venta,{foreignKey:'idtienda'})

Venta.belongsTo(Usuario,{foreignKey:'email'})
Usuario.hasMany(Venta,{foreignKey:'email'})