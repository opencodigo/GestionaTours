"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BUSQUEDAxProvincia_1 = require("../Controllers/busquedas/BUSQUEDAxProvincia");
exports.BusquedaxProv_Router = express_1.Router();
exports.BusquedaxProv_Router.post('/busqueda/provincia/:provincia', BUSQUEDAxProvincia_1.getBusquedabyProv);
