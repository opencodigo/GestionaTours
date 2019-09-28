"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConexionSequelize_1 = require("../Config/ConexionSequelize");
exports.getTourByRegion = function (req, res) {
    console.log(req.params.dep);
    ConexionSequelize_1.Departamento.findAll({
        where: {
            dep_id: req.params.dep
        },
        include: [{
                model: ConexionSequelize_1.Provincia,
                include: [{
                        model: ConexionSequelize_1.Tour
                    }]
            }]
    }).then(function (rpta) {
        var contenido = {
            message: 'por departamento',
            encontramos: rpta
        };
        res.status(200).json(contenido);
    });
};
