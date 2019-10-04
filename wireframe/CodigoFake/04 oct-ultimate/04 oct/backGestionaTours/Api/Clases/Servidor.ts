import express from 'express';
import { Response, Request, NextFunction } from 'express';
import http from 'http';
import bodyParser = require('body-parser');

import {sequelize} from './../Config/ConexionSequelize';

import { BusquedaTotal_Router } from '../Routes/busqueda';
import { Tour_router } from '../Routes/Tour';
import { Producto_router } from '../Routes/Producto';
import { Provin_Router, busquedaProvincia_Router } from '../Routes/provincia';
import { ByDep_Router } from '../Routes/busquedaByDep';
import { Factura_ruta } from '../Routes/FacturaRuta';
import { Programacion_ruta } from '../Routes/ProgramacionRuta';
import { Reserva_ruta } from '../Routes/ReservaRuta';



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
        this.app.use(Tour_router);
        this.app.use(BusquedaTotal_Router);
        this.app.use(Producto_router);
        this.app.use(Provin_Router);
        this.app.use(ByDep_Router);
        this.app.use(busquedaProvincia_Router);
        this.app.use(Factura_ruta);
        this.app.use(Programacion_ruta);
        this.app.use(Reserva_ruta)

     
         

    }
    /* ************************************************************************************* */
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("Servidor iniciado correctamente : " + this.puerto);

            sequelize.authenticate().then(() => {
                    console.log('Connection has been established successfully.');
                    sequelize.sync({force:false}).then(()=>{
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