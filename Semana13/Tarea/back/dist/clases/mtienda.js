"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../API/config/sequelize");
var mTienda = /** @class */ (function () {
    function mTienda() {
        this.getTiendas();
    }
    mTienda.prototype.getTiendas = function () {
        var _this = this;
        sequelize_1.Tienda.findAll().then(function (respuesta) {
            _this.lista = respuesta;
        });
    };
    return mTienda;
}());
exports.mTienda = mTienda;
