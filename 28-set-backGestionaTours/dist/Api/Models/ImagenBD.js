"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagen_model = (sequelize, type) => {
    let Imagen = sequelize.define('t_imagen', {
        img_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        img_url: {
            type: type.TEXT,
            allowNull: true
        }
    }, {
        tableName: 't_imagen',
        timestamps: false
    });
    return Imagen;
};
