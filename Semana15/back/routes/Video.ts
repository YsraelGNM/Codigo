// video router
import { video_controller } from "../controllers/video";
import { Router } from "express";


var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./imagenes'})

export var video_router = Router();


video_router.get('/video',video_controller.getAll);
video_router.post('/create',video_controller.create);
video_router.post('/video/upload/:id',multipartMiddleware,video_controller.upLoadImage);
video_router.delete('/delete/:id',video_controller.delete);
video_router.get('/getImagenByName/:name',video_controller.getImagenByName);
video_router.get('/video/:id',video_controller.getById);
