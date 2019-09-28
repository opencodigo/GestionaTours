"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notas_model = (sequelize, type) => {
    var Notas = sequelize.define('t_notas', {
        notas_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_notas',
        timestamps: false
    });
    return Notas;
};
