"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descIncluye_model = (sequelize, type) => {
    var DescIncluye = sequelize.define('t_descIncluye', {
        descIncluye_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descIncluye_detalle: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        tableName: 't_descIncluye',
        timestamps: false
    });
    return DescIncluye;
};
