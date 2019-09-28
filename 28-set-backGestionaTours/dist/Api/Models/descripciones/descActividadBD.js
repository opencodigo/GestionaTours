"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descActividad_model = (sequelize, type) => {
    var DescActividad = sequelize.define('t_descActividad', {
        descActividad_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descActividad_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descActividad',
        timestamps: false
    });
    return DescActividad;
};
