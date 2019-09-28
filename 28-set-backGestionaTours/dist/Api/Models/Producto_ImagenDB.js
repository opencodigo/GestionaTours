"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producto_imagen_model = (sequelize, type) => {
    let Producto_Imagen = sequelize.define('t_producto_imagen', {
        prod_img_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_producto_imagen',
        timestamps: false
    });
    return Producto_Imagen;
};
