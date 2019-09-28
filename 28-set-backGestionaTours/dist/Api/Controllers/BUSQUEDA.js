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
const ConexionSequelize_1 = require("./../Config/ConexionSequelize");
exports.getBusqueda = (req, res) => {
    Busqueda(req).then(rpta => {
        res.send(rpta);
    });
};
let Busqueda = (req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.prog_fechin);
    let busqueda_front = yield ConexionSequelize_1.sequelize.query(`select prog_id from t_programacion join t_tour_producto on t_programacion.tour_id = t_tour_producto.tour_id
    join t_producto on t_tour_producto.prod_id = t_producto.prod_id
where prov_id=${req.body.provID} and prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	
union
select prog_id from t_programacion join t_producto on t_programacion.prod_id = t_producto.prod_id where prov_id = ${req.body.provID}	group by prog_id and 
prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	`);
    return busqueda_front[0];
});
