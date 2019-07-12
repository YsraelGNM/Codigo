"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// video router
var video_1 = require("../controllers/video");
var express_1 = require("express");
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.video_router = express_1.Router();
exports.video_router.get('/video', video_1.video_controller.getAll);
exports.video_router.post('/create', video_1.video_controller.create);
exports.video_router.post('/video/upload/:id', multipartMiddleware, video_1.video_controller.upLoadImage);
exports.video_router.delete('/delete/:id', video_1.video_controller.delete);
exports.video_router.get('/getImagenByName/:name', video_1.video_controller.getImagenByName);
exports.video_router.get('/video/:id', video_1.video_controller.getById);
