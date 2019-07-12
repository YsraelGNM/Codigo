"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registro_model = (sequelize, type) => {
    var registro_model = sequelize.define('t_registro', {
        reg_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reg_fechin: {
            type: type.DATE,
            allowNull: true
        },
        reg_fechfin: {
            type: type.DATE,
            allowNull: true
        },
        reg_est: {
            type: type.STRING(45),
            allowNull: true
        },
        reg_monto: {
            type: type.DECIMAL(10, 2),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_registro'
    });
    //Aqui se declara las funciones de modelo o de clase
    return registro_model;
};
