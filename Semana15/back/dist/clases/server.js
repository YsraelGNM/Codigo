"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Usuario_1 = require("../routes/Usuario");
var mongoose_1 = __importDefault(require("mongoose"));
var Video_1 = require("../routes/Video");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        //Configurando el CORS
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
            res.header('Allow', 'GET, POST, DELETE');
            next();
        });
        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
        this.conectarMongo();
    }
    Server.prototype.conectarMongo = function () {
        mongoose_1.default.connect('mongodb://localhost:27017/codigovirtual');
        this.conexion = mongoose_1.default.connect;
    };
    Server.prototype.configurarBodyParser = function () {
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    };
    Server.prototype.start = function () {
        this.app.listen(this.puerto, function () {
            console.log("Servidor corre correctamente.");
        });
    };
    Server.prototype.asignarRutas = function () {
        this.app.get('/', function (req, res) {
            res.send("Buenas");
        });
        this.app.use('/api', Usuario_1.usuario_router);
        this.app.use('/api', Video_1.video_router);
    };
    return Server;
}());
exports.Server = Server;
