"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tour_model = (sequelize, type) => {
    let Tour = sequelize.define('t_tour', {
        tour_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tour_nom: {
            type: type.STRING(150),
            allowNull: false
        },
        tour_prec: {
            type: type.DECIMAL(10),
            allowNull: false
        },
        tour_puntos: {
            type: type.DECIMAL(10),
            allowNull: true
        }
    }, {
        tableName: 't_tour',
        timestamps: false
    });
    return Tour;
};
