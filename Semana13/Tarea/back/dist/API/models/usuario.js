"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
exports.usuario_model = function (sequelize, type) {
    var usuario_model = sequelize.define('usuarios', {
        email: {
            type: type.STRING(100),
            primaryKey: true,
            allowNull: false
        },
        rol: {
            type: type.STRING(1),
            allowNull: true
        },
        hash: {
            type: type.TEXT,
            allowNull: true
        },
        salt: {
            type: type.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'usuarios'
    });
    //Aqui se declara las funciones de modelo o de clase
    usuario_model.prototype.setSaltAndHash = function (pass) {
        //console.log(this.usu_nom);
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(pass, this.salt, 1000, 64, 'sha512').toString('hex');
    };
    usuario_model.prototype.generateJWT = function () {
        var payload = {
            usu_id: this.email,
            usu_nom: "" + this.email
        };
        var token = jwt.sign(payload, 'ysra', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    usuario_model.prototype.validPassword = function (password) {
        //console.log(`aqui esta el salt ${this.usu_salt}`);
        var hash_temporal = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.hash) {
            return true;
        }
        else {
            return false;
        }
    };
    return usuario_model;
};
