"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itinerario_model = (sequelize, type) => {
    var Itinerario = sequelize.define('t_itinerario', {
        iti_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        iti_titulo: {
            type: type.STRING(150),
            allowNull: false
        },
        iti_dia: {
            type: type.STRING(25),
            allowNull: false
        }
    }, {
        tableName: 't_itinerario',
        timestamps: false
    });
    return Itinerario;
};
