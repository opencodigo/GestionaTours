"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provincia_model = (sequelize, type) => {
    let Provincia = sequelize.define('t_provincia', {
        prov_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prov_nom: {
            type: type.STRING(150),
            allowNull: false
        }
    }, {
        tableName: 't_provincia',
        timestamps: false
    });
    return Provincia;
};
