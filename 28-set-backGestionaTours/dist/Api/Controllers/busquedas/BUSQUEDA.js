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
//import sequelize = require("sequelize");
const ConexionSequelize_1 = require("../../Config/ConexionSequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.getBusqueda = (req, res) => {
    busqueda(req).then(rpta => {
        res.send(rpta);
    });
};
let busqueda = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var TourArr = [];
    var TourArr_temp = [];
    let rows = yield ConexionSequelize_1.sequelize.query(`call get_table('${req.body.busqueda}');`);
    let descripciones = yield rows.filter((elemento) => { if (elemento.t_table === "t_descripcion") {
        return elemento;
    }
    else {
        return null;
    } });
    let descDescripciones = yield rows.filter((elemento) => { if (elemento.t_table === "t_descDescripcion") {
        return elemento;
    }
    else {
        return null;
    } });
    let tur = yield rows.filter((elemento) => { if (elemento.t_table === "t_tour") {
        return elemento;
    }
    else {
        return null;
    } });
    let departamento = yield rows.filter((elemento) => { if (elemento.t_table === "t_departamento") {
        return elemento;
    }
    else {
        return null;
    } });
    let provincia = yield rows.filter((elemento) => { if (elemento.t_table === "t_provincia") {
        return elemento;
    }
    else {
        return null;
    } });
    /*------------------------------------------------------BUSQUEDA EN DESCRIPCION Y DESCCESCRIPCION---------------------------------------*/
    TourArr = [];
    if (descripciones.length > 0) {
        let coincidencia_descripciones = yield ConexionSequelize_1.Descripcion.findAll({
            where: {
                [descripciones[0].t_field]: {
                    [Op.like]: `%${req.body.busqueda}%`
                }
            },
            include: [{
                    model: ConexionSequelize_1.Tour
                }]
        });
        coincidencia_descripciones.forEach((element) => {
            //  console.log('__esto de de descrpcion__')
            //   console.log(element.dataValues.t_tour.dataValues)
            TourArr_temp.push(element.dataValues.t_tour.dataValues);
        });
    }
    if (descDescripciones.length > 0) {
        let coincidencia_DescDescripciones = yield ConexionSequelize_1.DescDescripcion.findAll({
            attributes: ['desc_id'],
            where: {
                [descDescripciones[0].t_field]: {
                    [Op.like]: `%${req.body.busqueda}%`,
                },
            },
            group: ['desc_id'],
            include: [{
                    model: ConexionSequelize_1.Descripcion,
                    include: [{
                            model: ConexionSequelize_1.Tour
                        }]
                }],
        });
        coincidencia_DescDescripciones.forEach((element) => {
            TourArr_temp.push(element.dataValues.t_descripcion.dataValues.t_tour.dataValues);
        });
    }
    /*----------------------------------------------------------------BUSQUEDA TOUR-------------------------------------------------*/
    if (tur.length > 0) {
        let coincidencia_Tour = yield ConexionSequelize_1.Tour.findAll({
            where: {
                [tur[0].t_field]: {
                    [Op.like]: `%${req.body.busqueda}%`
                }
            },
        });
        //Hora del pusheo
        coincidencia_Tour.forEach((element) => {
            console.log(" sie way");
            // console.log(element.dataValues)
            TourArr_temp.push(element.dataValues);
        });
    }
    /*----------------------------------------------------- BUSQUEDA DEPARTAMENTO---------------------------------------------------*/
    if (departamento.length > 0) {
        let coincidencia_departamento = yield ConexionSequelize_1.Departamento.findAll({
            where: {
                [departamento[0].t_field]: {
                    [Op.like]: `%${req.body.busqueda}%`
                }
            },
            include: [{
                    model: ConexionSequelize_1.Provincia,
                    include: [{
                            model: ConexionSequelize_1.Tour
                        }]
                }]
        });
        //la hora edl pusheo
        coincidencia_departamento.forEach((DepElement) => {
            DepElement.t_provincia.forEach((element) => {
                TourArr_temp.push(element.t_tours[0].dataValues);
            });
        });
        // TourArr = TourArr.concat(TourArr_temp)
    }
    /*----------------------------------------------------------BUSQUEDA PROVINCIA------------------------------------------------------------*/
    if (provincia.length > 0) {
        let coincidencia_provincia = yield ConexionSequelize_1.Provincia.findAll({
            where: {
                [provincia[0].t_field]: {
                    [Op.like]: `%${req.body.busqueda}%`
                }
            },
            include: [
                { model: ConexionSequelize_1.Tour }
            ]
        });
        //console.log(coincidencia_provincia)
        coincidencia_provincia.forEach((provEl) => {
            //console.log(provEl.dataValues.t_tours)
            provEl.dataValues.t_tours.forEach((intoProv) => {
                console.log('___into deep Provv');
                console.log(intoProv.dataValues);
                TourArr_temp.push(intoProv.dataValues);
            });
        });
    }
    /*---------------------------------------------------------FIN------------------------------------------------------------------------*/
    const finalOut = [];
    TourArr_temp.forEach((value) => {
        if (!finalOut.some(x => (x.tour_id === value.tour_id))) {
            finalOut.push(value);
        }
    });
    return finalOut;
});
