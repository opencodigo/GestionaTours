"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BUSQUEDAxAct_1 = require("../Controllers/busquedas/BUSQUEDAxAct");
exports.BusquedaxAct_Router = express_1.Router();
exports.BusquedaxAct_Router.post('/busqueda/actividad/:actividad', BUSQUEDAxAct_1.getBusquedaxAct);
