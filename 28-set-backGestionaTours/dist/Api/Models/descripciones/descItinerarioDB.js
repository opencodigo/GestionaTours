"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descItinerario_model = (sequelize, type) => {
    var DescItinerario = sequelize.define('t_descItinerario_', {
        descItinerario_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descItinerario_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descItinerario',
        timestamps: false
    });
    return DescItinerario;
};
