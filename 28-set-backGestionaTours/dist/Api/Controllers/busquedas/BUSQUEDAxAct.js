"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionSequelize_1 = require("../../Config/ConexionSequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.getBusquedaxAct = (req, res) => {
    busquedaxAct(req).then(rpta => {
        res.send(rpta);
    });
};
let busquedaxAct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let actArr = [];
    let rows = yield ConexionSequelize_1.sequelize.query(`call get_table('${req.params.actividad}');`);
    let descActividad = yield rows.filter((elemento) => (elemento.t_table === "t_descActividad"));
    let coincidencia_descActividad = yield ConexionSequelize_1.sequelize.query(`select tour_id from t_actividad join t_descActividad on t_actividad.act_id = t_descActividad.act_id
    where descActividad_detalle  like '%${req.params.actividad}%' ;
    `);
    return coincidencia_descActividad[0];
});
