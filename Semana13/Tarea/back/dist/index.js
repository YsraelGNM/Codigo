"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./clases/server");
var servidor = new server_1.Server();
servidor.start();
servidor.escucharSockets();
