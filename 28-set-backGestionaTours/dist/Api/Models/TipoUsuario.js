"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuario_model = function (sequelize, type) {
    var TipoUsuario = sequelize.define('t_tipoUsuario', {
        tipoUsur_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_tipoUsuario',
        timestamps: true
    });
    return TipoUsuario;
};
