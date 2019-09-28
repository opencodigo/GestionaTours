"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tour_Producto_model = (sequelize, type) => {
    let Tour_Producto = sequelize.define('t_tour_producto', {
        tour_prod_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_tour_producto',
        timestamps: false
    });
    return Tour_Producto;
};
