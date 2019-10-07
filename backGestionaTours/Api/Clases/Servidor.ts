import express from 'express';
import { Response, Request, NextFunction } from 'express';
import http from 'http';
import bodyParser = require('body-parser');

import {sequelize} from './../Config/ConexionSequelize';

/* Rutas Productos */
import {Producto_ruta} from '../Routes/ProductoRuta';
/* Ruta Tour */
import {Tour_Ruta} from '../Routes/TourRuta';
 

export class Servidor {
    public app: express.Application;
    public puerto: any; 
    public httpServer: http.Server;
 
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        this.httpServer = new http.Server(this.app);
        
        this.configurarBodyParser();
        this.habilitarCORS();
        this.configurarRutas();
    }
    /* ************************************************************************************ */
    habilitarCORS() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // configurar CORS
            res.header("Access-Control-Allow-Origin", "*");
            //res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        })
    }
    /* ************************************************************************************* */
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    /* ************************************************************************************* */
    configurarRutas() {
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send("servidor Okey!!");
        });
     /* Rutas Producto */
        this.app.use(Producto_ruta);
     /* Ruta Tour */
        this.app.use(Tour_Ruta);
    }
    /* ************************************************************************************* */
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("Servidor iniciado correctamente : " + this.puerto);

            sequelize.authenticate().then(() => {
                    console.log('Connection has been established successfully.');
                    sequelize.sync({force:false
                    }).then(()=>{
                        console.log("BD Creada con exito");
                        
                    }).catch((error:any)=>{
                        console.log("Error al crear la BD");
                        console.log(error);
                    });
                }).catch((error:any)=>{
                    console.log(error);
                });
        });
    }
} 