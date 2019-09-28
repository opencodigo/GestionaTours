"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programacion_model = (sequelize, type) => {
    let Programacion = sequelize.define('t_programacion', {
        prog_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prog_fechin: {
            type: type.DATE,
            allowNull: false
        },
        prog_fechfin: {
            type: type.DATE,
            allowNull: false
        },
        prog_prec: {
            type: type.DECIMAL(10, 2),
            allowNull: true
        },
        prog_cap: {
            type: type.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 't_programacion',
        timestamps: false
    });
    return Programacion;
};
