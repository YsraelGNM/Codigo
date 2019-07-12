"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// playa router
var playa_1 = require("../controllers/playa");
var express_1 = require("express");
var utils_1 = require("../utils/utils");
exports.playa_router = express_1.Router();
exports.playa_router.get('/playa/:playa_id/getslots', utils_1.wachiman, playa_1.playa_controller.getAllSlotsByPlayaId);
//playa_router.get('/playa/getslots',wachiman,playa_controller.getAllSlotsByPlayaId);
exports.playa_router.get('/playa/getallplayas', playa_1.playa_controller.getAllPlayas);
