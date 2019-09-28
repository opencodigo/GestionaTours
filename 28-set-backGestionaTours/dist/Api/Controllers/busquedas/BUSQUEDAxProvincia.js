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
const ConexionSequelize_1 = require("./../../Config/ConexionSequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let busquedaxProv = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let ProvArr = [];
    console.log(req.params.provincia);
    let rows = yield ConexionSequelize_1.sequelize.query(`call get_table('${req.params.provincia}');`);
    console.log(rows);
    let provincia = yield rows.filter((elemento) => (elemento.t_table === "t_provincia"));
    console.log(provincia);
    let coincidencia_provincia = yield ConexionSequelize_1.Provincia.findAll({
        where: {
            [provincia[0].t_field]: {
                [Op.like]: `%${req.params.provincia}%`
            }
        },
        include: [
            { model: ConexionSequelize_1.Tour }
        ]
    });
    ProvArr = [];
    console.log(coincidencia_provincia.length);
    coincidencia_provincia.forEach((element) => {
        console.log("____elemtops de la provincia____");
        console.log(element.dataValues.t_tours[0].dataValues);
        ProvArr.push(element.dataValues.t_tours[0].dataValues);
    });
    return ProvArr;
});
exports.getBusquedabyProv = (req, res) => {
    busquedaxProv(req).then((rpta) => {
        res.send(rpta);
    }).catch();
};
