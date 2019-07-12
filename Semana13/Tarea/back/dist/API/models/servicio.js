"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicio_model = function (sequelize, type) {
    var servicio_model = sequelize.define('t_servicio', {
        serv_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        serv_nom: {
            type: type.STRING(50),
            allowNull: true
        },
        serv_desc: {
            type: type.TEXT
        }
    }, {
        timestamps: false,
        tableName: 't_servicio'
    });
    //Aqui se declara las funciones de modelo o de clase
    servicio_model.prototype.mostrarIdYNombre = function () {
        console.log(this.serv_nom);
    };
    return servicio_model;
};
