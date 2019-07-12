"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var sequelize_1 = require("../API/config/sequelize");
var venta_1 = require("../API/routes/venta");
var auth_1 = require("../API/routes/auth");
var tienda_1 = require("../API/routes/tienda");
var mfunciones_1 = require("./mfunciones");
var Server = /** @class */ (function () {
    function Server() {
        this.mTienda = new mfunciones_1.mFunciones();
        this.app = express_1.default();
        //Configurando el CORS
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.header('Access-Control-Allow-Headers', 'Content-type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET,POST');
            res.header('Allow', 'GET, POST');
            next();
        });
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
    }
    Server.prototype.configurarBodyParser = function () {
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    };
    Server.prototype.start = function () {
        this.httpServer.listen(this.puerto, function () {
            console.log("Servidor corre correctamente.");
            sequelize_1.sequelize.sync({ force: false }).then(function () {
                console.log("Base de datos creada con exito.");
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    Server.prototype.asignarRutas = function () {
        var _this = this;
        this.app.get('/', function (req, res) {
            res.send("Buenas");
        });
        this.app.post('/enviar-mensaje', function (req, res) {
            var _a = req.body, de = _a.de, para = _a.para, mensaje = _a.mensaje;
            var content = {
                mensaje: mensaje,
                nombre: de
            };
            _this.io.to(para).emit('nuevo-mensaje', content);
            res.status(200).send('');
        });
        this.app.use('', auth_1.auth_router);
        this.app.use('', tienda_1.tienda_router);
        this.app.use('', venta_1.venta_router);
    };
    Server.prototype.escucharSockets = function () {
        var _this = this;
        console.log("escuchando sockets");
        this.io.on('connect', function (cliente) {
            console.log('alguien se conectó');
            console.log(cliente.id);
            cliente.on('disconnect', function () {
                console.log('el cliente se desconecto');
            });
            cliente.on('lista-tiendas', function () {
                _this.io.emit('retorno-tiendas', _this.mTienda.lista);
            });
            cliente.on('enviar-venta', function (objVenta) {
                _this.mTienda.createVenta(objVenta);
            });
        });
    };
    return Server;
}());
exports.Server = Server;
