"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descNotas_model = (sequelize, type) => {
    var DescNotas = sequelize.define('t_descNotas', {
        descNotas_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descNotas_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descNotas',
        timestamps: false
    });
    return DescNotas;
};
