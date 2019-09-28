"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descNoincluye_model = (sequelize, type) => {
    var DescNoincluye = sequelize.define('t_descNoincluye', {
        descNoincluye_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descNoincluye_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descNoincluye',
        timestamps: false
    });
    return DescNoincluye;
};
