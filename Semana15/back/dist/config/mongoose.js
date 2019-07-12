"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario_1 = require("../models/Usuario");
var Video_1 = require("../models/Video");
var mongoose = require('mongoose');
exports.Usuario = mongoose.model('usuario', Usuario_1.usuarioSchema);
exports.Video = mongoose.model('video', Video_1.videoSchema);
