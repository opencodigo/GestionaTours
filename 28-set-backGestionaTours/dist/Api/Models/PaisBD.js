"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pais_model = (sequelize, type) => {
    let Pais = sequelize.define('t_pais', {
        pais_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pais_nom: {
            type: type.STRING(150),
            allowNull: false
        }
    }, {
        tableName: 't_pais',
        timestamps: false
    });
    return Pais;
};
