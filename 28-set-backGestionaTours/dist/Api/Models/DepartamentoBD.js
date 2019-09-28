"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departamento_model = (sequelize, type) => {
    let Departamento = sequelize.define('t_departamento', {
        dep_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dep_nom: {
            type: type.STRING(150),
            allowNull: false
        }
    }, {
        tableName: 't_departamento',
        timestamps: false
    });
    return Departamento;
};
