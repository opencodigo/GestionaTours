"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descripcion_model = (sequelize, type) => {
    var Descripcion = sequelize.define('t_descripcion', {
        desc_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        desc_titulo: {
            type: type.TEXT,
            allowNull: false
        },
    }, {
        tableName: 't_descripcion',
        timestamps: false
    });
    return Descripcion;
};
