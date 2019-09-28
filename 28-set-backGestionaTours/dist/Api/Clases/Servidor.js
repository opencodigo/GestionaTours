"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const bodyParser = require("body-parser");
const ConexionSequelize_1 = require("./../Config/ConexionSequelize");
const Tour_1 = require("../Routes/Tour");
const busqueda_1 = require("../Routes/busqueda");
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.puerto = process.env.PORT || 3000;
        this.httpServer = new http_1.default.Server(this.app);
        this.configurarBodyParser();
        this.habilitarCORS();
        this.configurarRutas();
    }
    /* ************************************************************************************ */
    habilitarCORS() {
        this.app.use((req, res, next) => {
            // configurar CORS
            res.header("Access-Control-Allow-Origin", "*");
            //res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        });
    }
    /* ************************************************************************************* */
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    /* ************************************************************************************* */
    configurarRutas() {
        this.app.get('/', (req, res) => {
            res.status(200).send("servidor Okey!!");
        });
        this.app.use(Tour_1.Tour_router);
        this.app.use(busqueda_1.BusquedaTotal_Router);
    }
    /* ************************************************************************************* */
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("Servidor iniciado correctamente : " + this.puerto);
            ConexionSequelize_1.sequelize.authenticate().then(() => {
                console.log('Connection has been established successfully.');
                ConexionSequelize_1.sequelize.sync({ force: false }).then(() => {
                    console.log("BD Creada con exito");
                }).catch((error) => {
                    console.log("Error al crear la BD");
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        });
    }
}
exports.Servidor = Servidor;
