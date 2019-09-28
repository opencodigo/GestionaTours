"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuario_model = (sequelize, type) => {
    var TipoUsuario = sequelize.define('t_tipoUsuario', {
        tipoUsur_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipoUsur_detalle: {
            type: type.TEXT,
            allow: true // cpuede o no comentar
        }
    }, {
        tableName: 't_tipoUsuario',
        timestamps: false
    });
    return TipoUsuario;
};
