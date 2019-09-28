"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tour_1 = require("../Controllers/tour");
exports.Tour_router = express_1.Router();
exports.Tour_router.get('/Tour/:olaTur', tour_1.getTourById);
