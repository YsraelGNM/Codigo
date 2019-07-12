"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// registro router
const registro_1 = require("../controllers/registro");
const express_1 = require("express");
exports.registro_router = express_1.Router();
exports.registro_router.get('/registro/slot/:slotId/getall', registro_1.registro_controller.getAllRegistrosBySlotId);
exports.registro_router.get('/registro/slot/:slotId/:date/getall', registro_1.registro_controller.getAllRegistrosBySlotIdbyDate);
