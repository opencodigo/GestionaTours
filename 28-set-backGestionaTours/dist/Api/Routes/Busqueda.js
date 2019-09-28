"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Busqueda_1 = require("../Controllers/Busqueda");
exports.BusquedaTotal_Router = express_1.Router();
exports.BusquedaTotal_Router.post('/busqueda', Busqueda_1.getBusqueda);
