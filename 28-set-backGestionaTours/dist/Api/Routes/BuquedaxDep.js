"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BUSQUEDAxDEP_1 = require("../Controllers/busquedas/BUSQUEDAxDEP");
exports.BusquedaxDep_Router = express_1.Router();
exports.BusquedaxDep_Router.post('/busqueda/departamento/:departamento', BUSQUEDAxDEP_1.getBusquedabyDep);
