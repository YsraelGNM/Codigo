"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
exports.verificarToken = function (token) {
    try {
        var data = jwt.verify(token, 'ysra', { algorithm: 'RS256' });
        return data;
    }
    catch (err) {
        console.log(err.message);
        return null;
    }
};
exports.wachiman = function (req, res, next) {
    if (req.headers.authorization) {
        var token = req.headers.authorization.split(' ')[1];
        console.log(token);
        var resultado = exports.verificarToken(token);
        if (resultado) {
            next();
        }
        else {
            var response = {
                message: 'error',
                content: 'Error en el Token'
            };
            res.status(500).json(response);
        }
    }
    else {
        var response = {
            message: 'unauthorize',
            content: 'No esta autorizado para realizar la solicitud',
        };
        res.status(401).json(response);
    }
};
