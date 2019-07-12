"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../config/mongoose");
var fs = require('fs');
var path_module = require('path');
exports.video_controller = {
    getAll: function (req, res) {
        mongoose_1.Video.find(function (error, response) {
            if (error) {
                res.status(500).json({
                    error: "Error en el Servidor"
                });
            }
            else {
                res.status(200).json({
                    message: "ok",
                    content: response
                });
            }
        });
    },
    getById: function (req, res) {
        var id = req.params.id;
        mongoose_1.Video.findById(id, function (error, response) {
            if (error) {
                res.status(500).json({
                    error: "Error en el Servidor"
                });
            }
            else {
                res.status(200).json({
                    message: "ok",
                    content: response
                });
            }
        });
    },
    create: function (req, res) {
        var objVideo = new mongoose_1.Video(req.body);
        objVideo.save(function (error, usuarioCreado) {
            if (error) {
                res.status(500).json({
                    error: "Error al crear el Video."
                });
            }
            else {
                res.status(200).json({
                    message: "Video Creado.",
                    content: usuarioCreado
                });
            }
        });
    },
    update: function (req, res) {
        var objVideo = new mongoose_1.Video(req.body);
        mongoose_1.Video.findByIdAndUpdate(objVideo._id, objVideo, { new: true }, function (error, usuarioActualizado) {
            if (error) {
                res.status(500).json({
                    error: "Error al actualizar el Video."
                });
            }
            else {
                res.status(200).json({
                    message: "Video Actualizado.",
                    content: usuarioActualizado
                });
            }
        });
    },
    delete: function (req, res) {
        mongoose_1.Video.findByIdAndDelete(req.params.id, function (error, videoBorrado) {
            if (error) {
                res.status(500).json({
                    error: error
                });
            }
            else {
                fs.unlink("imagenes/" + videoBorrado.vid_img, function (err) {
                    if (!err) {
                        res.status(200).json({
                            message: "Video Borrado.",
                            content: videoBorrado._id
                        });
                    }
                    else {
                        res.status(500).json({
                            error: err
                        });
                    }
                });
                res.status(200).json({
                    message: "Video Borrado.",
                    content: videoBorrado._id
                });
            }
        });
    },
    upLoadImage: function (req, res) {
        var id = req.params.id;
        var nombreYExtension = req.files.archivo.path.split('\\')[1];
        if (req.files) {
            mongoose_1.Video.findByIdAndUpdate(id, { vid_img: nombreYExtension }, { new: true }, function (error, usuarioActualizado) {
                if (error) {
                    res.status(500).json({
                        error: error
                    });
                }
                else {
                    res.status(200).json({
                        message: "Imagen Actualizada.",
                        content: usuarioActualizado
                    });
                }
            });
        }
        else {
            res.status(500).json({
                error: "Error al subir el Video."
            });
        }
    },
    getImagenByName: function (req, res) {
        var ruta = "imagenes/" + req.params.name;
        var rutaDefault = 'imagenes/default.png';
        if (fs.existsSync(ruta)) {
            return res.sendFile(path_module.resolve(ruta));
        }
        else {
            return res.sendFile(path_module.resolve(rutaDefault));
        }
    }
};
