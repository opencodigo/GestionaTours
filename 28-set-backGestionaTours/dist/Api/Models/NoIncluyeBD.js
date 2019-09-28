"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIncluye_model = (sequelize, type) => {
    var NoIncluye = sequelize.define('t_noIncluye', {
        noIncluye_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 't_noIncluye',
        timestamps: false
    });
    return NoIncluye;
};
