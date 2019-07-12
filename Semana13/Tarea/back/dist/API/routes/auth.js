"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// auth router
var auth_1 = require("../controllers/auth");
var express_1 = require("express");
exports.auth_router = express_1.Router();
exports.auth_router.post('/auth/register', auth_1.auth_controller.register);
exports.auth_router.post('/auth/login', auth_1.auth_controller.login);
exports.auth_router.post('/auth/email', auth_1.auth_controller.email);
