"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playa_model = (sequelize, type) => {
    var playa_model = sequelize.define('t_playa', {
        playa_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        playa_nom: {
            type: type.STRING(45),
            allowNull: true
        },
        playa_lat: {
            type: type.DECIMAL(13, 10),
            allowNull: true
        },
        playa_lng: {
            type: type.DECIMAL(13, 10),
            allowNull: true
        },
        playa_dir: {
            type: type.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_playa'
    });
    //Aqui se declara las funciones de modelo o de clase
    return playa_model;
};
