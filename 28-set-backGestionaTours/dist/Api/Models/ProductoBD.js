"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producto_model = (sequelize, type) => {
    let Producto = sequelize.define('t_producto', {
        prod_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prod_nom: {
            type: type.STRING(150),
            allowNull: false
        },
        prod_prec: {
            type: type.DECIMAL,
            allowNull: true
        },
        prod_puntos: {
            type: type.DECIMAL(10),
            allowNull: true
        }
    }, {
        tableName: 't_producto',
        timestamps: false
    });
    return Producto;
};
