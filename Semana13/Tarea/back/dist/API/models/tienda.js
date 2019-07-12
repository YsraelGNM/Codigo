"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tienda_model = function (sequelize, type) {
    var tienda_model = sequelize.define('tiendas', {
        idtienda: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descripcion: {
            type: type.STRING(45),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'tiendas'
    });
    //Aqui se declara las funciones de modelo o de clase
    return tienda_model;
};
