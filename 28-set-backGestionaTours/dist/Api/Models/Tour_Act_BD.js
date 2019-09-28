"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tour_Actividad_model = (sequelize, type) => {
    let Tour_Actividad = sequelize.define('t_tour_actividad', {
        tour_act_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_tour_actividad',
        timestamps: false
    });
    return Tour_Actividad;
};
