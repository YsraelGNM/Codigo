"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tienda router
var tienda_1 = require("../controllers/tienda");
var express_1 = require("express");
exports.tienda_router = express_1.Router();
exports.tienda_router.get('/tienda/getAllTiendas', tienda_1.tienda_controller.getAllTiendas);
