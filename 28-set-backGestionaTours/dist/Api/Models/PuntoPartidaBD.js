"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puntoPartida_model = (sequelize, type) => {
    var PuntoPartida = sequelize.define('t_puntoPartida', {
        puntoPart_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_puntoPartida',
        timestamps: false
    });
    return PuntoPartida;
};
