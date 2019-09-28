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
let busquedaxDep = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let DepArr = [];
    //vamos a pasar por parametro el departamento abuscar
    console.log(req.params.departamento);
    let rows = yield ConexionSequelize_1.sequelize.query(`call get_table('${req.params.departamento}');`);
    console.log(rows);
    let departamento = yield rows.filter((elemento) => (elemento.t_table === "t_departamento"));
    console.log(" __departamento[0]__");
    console.log(departamento[0]);
    let coincidencia_departamento = yield ConexionSequelize_1.Departamento.findAll({
        where: {
            [departamento[0].t_field]: {
                [Op.like]: `%${req.params.departamento}%`
            }
        },
        include: [{
                model: ConexionSequelize_1.Provincia,
                include: [{
                        model: ConexionSequelize_1.Tour
                    }]
            }]
    });
    DepArr = [];
    console.log("___esto es coincidencia departamento___");
    coincidencia_departamento.forEach((element) => {
        //console.log("__dentro del oreach__")
        //console.log(element.dataValues.t_provincia);
        element.dataValues.t_provincia.forEach((provin) => {
            //console.log("el for mas interno_________________________________________")
            // console.log(provin.t_tours)
            provin.t_tours.forEach((elemeninterno3) => {
                console.log("///////elemnto 3int /////////////////////////////////");
                console.log(elemeninterno3.dataValues);
                DepArr.push(elemeninterno3.dataValues);
            });
        });
    });
    return DepArr;
});
exports.getBusquedabyDep = (req, res) => {
    busquedaxDep(req).then((rpta) => {
        res.send(rpta);
    });
};
