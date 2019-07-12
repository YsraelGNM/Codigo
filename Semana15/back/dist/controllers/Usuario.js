"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../config/mongoose");
exports.usuario_controller = {
    getAll: function (req, res) {
        mongoose_1.Usuario.find(function (error, response) {
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
        var objUsuario = new mongoose_1.Usuario(req.body);
        objUsuario.save(function (error, usuarioCreado) {
            if (error) {
                res.status(500).json({
                    error: "Error al crear el Usuario."
                });
            }
            else {
                res.status(200).json({
                    message: "Usuario Creado.",
                    content: usuarioCreado
                });
            }
        });
    },
    update: function (req, res) {
        var objUsuario = new mongoose_1.Usuario(req.body);
        mongoose_1.Usuario.findByIdAndUpdate(objUsuario._id, objUsuario, { new: true }, function (error, usuarioActualizado) {
            if (error) {
                res.status(500).json({
                    error: "Error al actualizar el Usuario."
                });
            }
            else {
                res.status(200).json({
                    message: "Usuario Actualizado.",
                    content: usuarioActualizado
                });
            }
        });
    }
};
