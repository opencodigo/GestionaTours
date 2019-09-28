"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluye_model = (sequelize, type) => {
    var Incluye = sequelize.define('t_incluye', {
        incluye_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_incluye',
        timestamps: false
    });
    return Incluye;
};
