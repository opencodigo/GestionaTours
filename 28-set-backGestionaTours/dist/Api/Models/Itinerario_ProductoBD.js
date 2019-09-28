"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itinerario_prod_model = (sequelize, type) => {
    var Itinerario_Producto = sequelize.define('t_itinerario_producto', {
        iti_prod_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        iti_prod_desc: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_itinerario_producto',
        timestamps: false
    });
    return Itinerario_Producto;
};
