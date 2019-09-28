"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividad_model = (sequelize, type) => {
    var Actividad = sequelize.define('t_actividad', {
        act_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        act_descrip: {
            type: type.STRING(50),
            allowNull: false
        }
    }, {
        tableName: 't_actividad',
        timestamps: false
    });
    return Actividad;
};
