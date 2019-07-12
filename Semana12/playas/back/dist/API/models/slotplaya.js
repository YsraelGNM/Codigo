"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotplaya_model = (sequelize, type) => {
    var slotplaya_model = sequelize.define('t_slotplaya', {
        slotp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        slotp_nro: {
            type: type.INTEGER,
            allowNull: true
        },
        slotp_est: {
            type: type.STRING(1),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_slotplaya'
    });
    //Aqui se declara las funciones de modelo o de clase
    return slotplaya_model;
};
