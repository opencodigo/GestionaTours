"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descPuntoPartida_model = (sequelize, type) => {
    var DescPuntoPartida = sequelize.define('t_descPuntoPartida', {
        descPuntoP_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descPuntoP_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descPuntoPartida',
        timestamps: false
    });
    return DescPuntoPartida;
};
