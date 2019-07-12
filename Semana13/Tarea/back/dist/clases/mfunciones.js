"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../API/config/sequelize");
var mFunciones = /** @class */ (function () {
    function mFunciones() {
        this.getTiendas();
    }
    mFunciones.prototype.getTiendas = function () {
        var _this = this;
        sequelize_1.Tienda.findAll().then(function (respuesta) {
            _this.lista = respuesta;
        });
    };
    mFunciones.prototype.createVenta = function (objVenta) {
        sequelize_1.Venta.create(objVenta).then(function (venta_creado) {
        });
    };
    return mFunciones;
}());
exports.mFunciones = mFunciones;
