"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// servicio router
var servicio_1 = require("../controllers/servicio");
var express_1 = require("express");
exports.servicio_router = express_1.Router();
exports.servicio_router.get('/servicio', servicio_1.servicio_controller.getAll);
exports.servicio_router.post('/servicio/create', servicio_1.servicio_controller.create);
exports.servicio_router.get('/servicio/:serv_id', servicio_1.servicio_controller.getById);
exports.servicio_router.post('/servicio/:serv_id', servicio_1.servicio_controller.upDate);
exports.servicio_router.post('/servicio/eliminar/:serv_id', servicio_1.servicio_controller.Eliminar);
