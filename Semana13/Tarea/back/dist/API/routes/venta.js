"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// playa router
var venta_1 = require("../controllers/venta");
var express_1 = require("express");
exports.venta_router = express_1.Router();
exports.venta_router.get('/venta/getAllVentas', venta_1.venta_controller.getAllVentas);
exports.venta_router.post('/venta/create', venta_1.venta_controller.create);
exports.venta_router.get('/venta/:idventa/getById', venta_1.venta_controller.getById);
exports.venta_router.post('/venta/:idventa/upDate', venta_1.venta_controller.upDate);
exports.venta_router.post('/venta/:idventa/Eliminar', venta_1.venta_controller.Eliminar);
exports.venta_router.get('/venta/getAllVentasConsolidado', venta_1.venta_controller.getAllVentasConsolidado);
