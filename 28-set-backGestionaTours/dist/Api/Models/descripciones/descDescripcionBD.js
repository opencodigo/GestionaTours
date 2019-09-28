"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descDescripcion_model = (sequelize, type) => {
    var DescDescripcion = sequelize.define('t_descDescripcion', {
        descDescripcion_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descDescripcion_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descDescripcion',
        timestamps: false
    });
    return DescDescripcion;
};
