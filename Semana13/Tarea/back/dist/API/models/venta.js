"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.venta_model = function (sequelize, type) {
    var venta_model = sequelize.define('ventas', {
        idventa: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        monto: {
            type: type.DECIMAL,
            allowNull: true
        },
        fecha: {
            type: type.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'ventas'
    });
    //Aqui se declara las funciones de modelo o de clase
    return venta_model;
};
