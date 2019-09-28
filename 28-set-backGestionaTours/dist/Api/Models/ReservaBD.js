"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserva_model = (sequelize, type) => {
    var Reserva = sequelize.define('t_reserva', {
        res_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        res_estado: {
            type: type.INTEGER,
            allowNull: false
        },
        res_prec: {
            type: type.DECIMAL,
            allowNull: true // puede ser que o haya precio segun el estado
        },
        res_fech: {
            type: type.DATE,
            allowNull: false // esta fecha contiene fecha util para estadistica
        }
    }, {
        tableName: 't_reserva',
        timestamps: false
    });
    return Reserva;
};
