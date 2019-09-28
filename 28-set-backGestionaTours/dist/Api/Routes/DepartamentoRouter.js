"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Departamento_1 = require("../Controllers/Departamento");
exports.Depart_router = express_1.Router();
exports.Depart_router.get('/turismo_by_region/:dep', Departamento_1.getTourByRegion);
