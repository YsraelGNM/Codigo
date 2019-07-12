"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usuario router
var usuario_1 = require("../controllers/usuario");
var express_1 = require("express");
exports.usuario_router = express_1.Router();
exports.usuario_router.get('/usuario', usuario_1.usuario_controller.getAll);
exports.usuario_router.post('/usuario/create', usuario_1.usuario_controller.create);
exports.usuario_router.put('/usuario/update', usuario_1.usuario_controller.update);
