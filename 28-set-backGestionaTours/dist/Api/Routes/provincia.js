"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provinvia_1 = require("../Controllers/provinvia");
exports.Provin_Router = express_1.Router();
exports.Provin_Router.get('/turism_by_prov/:prov', provinvia_1.getTourByProvincia);
