"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const UsuarioBD_1 = require("./../Models/UsuarioBD");
const TourBD_1 = require("./../Models/TourBD");
const ProductoBD_1 = require("./../Models/ProductoBD");
const ProgramacionBD_1 = require("./../Models/ProgramacionBD");
const ProvinciaBD_1 = require("./../Models/ProvinciaBD");
const DepartamentoBD_1 = require("./../Models/DepartamentoBD");
const PaisBD_1 = require("./../Models/PaisBD");
const ImagenBD_1 = require("./../Models/ImagenBD");
const Producto_ImagenDB_1 = require("./../Models/Producto_ImagenDB");
const ReservaBD_1 = require("../Models/ReservaBD");
const FacturaBD_1 = require("../Models/FacturaBD");
const Tour_ProductoBD_1 = require("../Models/Tour_ProductoBD");
const TipoUsuarioBD_1 = require("../Models/TipoUsuarioBD");
const DescripcionBD_1 = require("../Models/DescripcionBD");
const ActividadesBD_1 = require("../Models/ActividadesBD");
const Itinerario_ProductoBD_1 = require("../Models/Itinerario_ProductoBD");
const Prod_Atc_BD_1 = require("../Models/Prod_Atc_BD");
const Tour_Act_BD_1 = require("../Models/Tour_Act_BD");
const itinerario_TourBD_1 = require("../Models/itinerario_TourBD");
exports.sequelize = new Sequelize('bd_gestiontours', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    timezone: '-05:00',
});
exports.Usuario = UsuarioBD_1.usuario_model(exports.sequelize, Sequelize);
exports.Tour = TourBD_1.tour_model(exports.sequelize, Sequelize);
exports.Producto = ProductoBD_1.producto_model(exports.sequelize, Sequelize);
exports.Programacion = ProgramacionBD_1.programacion_model(exports.sequelize, Sequelize);
exports.Provincia = ProvinciaBD_1.provincia_model(exports.sequelize, Sequelize);
exports.Departamento = DepartamentoBD_1.departamento_model(exports.sequelize, Sequelize);
exports.Pais = PaisBD_1.pais_model(exports.sequelize, Sequelize);
exports.Imagen = ImagenBD_1.imagen_model(exports.sequelize, Sequelize);
exports.Producto_Imagen = Producto_ImagenDB_1.producto_imagen_model(exports.sequelize, Sequelize);
exports.Reserva = ReservaBD_1.reserva_model(exports.sequelize, Sequelize);
exports.Factura = FacturaBD_1.factura_model(exports.sequelize, Sequelize);
exports.Tour_producto = Tour_ProductoBD_1.Tour_Producto_model(exports.sequelize, Sequelize);
exports.TipoUsuario = TipoUsuarioBD_1.tipoUsuario_model(exports.sequelize, Sequelize);
//----------------------------14 set 2019----------------------------//
exports.Descripcion = DescripcionBD_1.descripcion_model(exports.sequelize, Sequelize);
exports.Actividad = ActividadesBD_1.actividad_model(exports.sequelize, Sequelize);
//export const PuntoPartida = puntoPartida_model(sequelize,Sequelize);
exports.Prod_Act = Prod_Atc_BD_1.Prod_Act_model(exports.sequelize, Sequelize);
exports.Tour_Act = Tour_Act_BD_1.Tour_Actividad_model(exports.sequelize, Sequelize);
exports.Itinerario_Tour = itinerario_TourBD_1.itinerario_tour_model(exports.sequelize, Sequelize);
exports.Itinerario_Producto = Itinerario_ProductoBD_1.itinerario_prod_model(exports.sequelize, Sequelize);
// ---15 set 2019---agregando descripciones---/
//--17 set 2019 -------------------------------------------/
/* Relacionamiento de Tablas */
exports.Tour.hasMany(exports.Programacion, { foreignKey: 'tour_id' });
exports.Programacion.belongsTo(exports.Tour, { foreignKey: 'tour_id' });
exports.Producto.hasMany(exports.Programacion, { foreignKey: 'prod_id' });
exports.Programacion.belongsTo(exports.Producto, { foreignKey: 'prod_id' });
/*Provincia.hasMany(Producto,{foreignKey:'prov_id'});
Producto.belongsTo(Provincia,{foreignKey:'prov_id'});*/
exports.Departamento.hasMany(exports.Provincia, { foreignKey: 'dep_id' });
exports.Provincia.belongsTo(exports.Departamento, { foreignKey: 'dep_id' });
exports.Pais.hasMany(exports.Departamento, { foreignKey: 'pais_id' });
exports.Departamento.belongsTo(exports.Pais, { foreignKey: 'pais_id' });
exports.Producto.hasMany(exports.Producto_Imagen, { foreignKey: 'prod_id' });
exports.Producto_Imagen.belongsTo(exports.Producto, { foreignKey: 'prod_id' });
exports.Imagen.hasMany(exports.Producto_Imagen, { foreignKey: 'img_id' });
exports.Producto_Imagen.belongsTo(exports.Imagen, { foreignKey: 'img_id' });
/*Producto.belongsToMany(Imagen,{as: 'producto', through: 'producto_imagen',foreignKey:'prod_id'});
Imagen.belongsToMany(Producto,{as: 'imagen', through: 'producto_imagen',foreignKey:'img_id'});*/
exports.Usuario.hasMany(exports.Reserva, { foreignKey: 'usu_id' });
exports.Reserva.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Factura.hasMany(exports.Reserva, { foreignKey: 'fact_id' });
exports.Reserva.belongsTo(exports.Factura, { foreignKey: 'fact_id' });
//--------------------------------------Usuario Reserva detallar mas-----//
exports.Usuario.hasMany(exports.Reserva, { foreignKey: 'usu_id' });
exports.Reserva.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
//-----------------------------------------------------------------------//
exports.Usuario.belongsTo(exports.TipoUsuario, { foreignKey: 'tipoUsur_id' });
exports.TipoUsuario.hasMany(exports.Usuario, { foreignKey: 'tipoUsur_id' });
//-------------------------------------------------//
exports.Programacion.hasMany(exports.Reserva, { foreignKey: 'prog_id' });
exports.Reserva.belongsTo(exports.Programacion, { foreignKey: 'prog_id' });
exports.Tour.hasMany(exports.Tour_producto, { foreignKey: 'tour_id' });
exports.Tour_producto.belongsTo(exports.Tour, { foreignKey: 'tour_id' });
exports.Producto.hasMany(exports.Tour_producto, { foreignKey: 'prod_id' });
exports.Tour_producto.belongsTo(exports.Producto, { foreignKey: 'prod_id' });
//----------------------------14 set 2019----------------------------//
//Pensaba que se podia trabajr con una soa tabla de descripcion
/*Itinerario.hasMany(Descripcion,{foreignKey:'iti_id'});
Descripcion.belongsTo(Itinerario,{foreignKey:'iti_id'});

Incluye.hasMany(Descripcion,{foreignKey:'incluye_id'});
Descripcion.belongsTo(Incluye,{foreignKey:'incluye_id'});

NoIncluye.hasMany(Descripcion,{foreignKey:'noIncluye_id'});
Descripcion.belongsTo(NoIncluye,{foreignKey:'noIncluye_id'});

Notas.hasMany(Descripcion,{foreignKey:'notas_id'});
Descripcion.belongsTo(Notas,{foreignKey:'notas_id'});*/
exports.Tour.hasMany(exports.Tour_Act, { foreignKey: 'tour_id' });
exports.Tour_Act.belongsTo(exports.Tour, { foreignKey: 'tour_id' });
exports.Actividad.hasMany(exports.Tour_Act, { foreignKey: 'act_id' });
exports.Tour_Act.belongsTo(exports.Actividad, { foreignKey: 'act_id' });
exports.Producto.hasMany(exports.Prod_Act, { foreignKey: 'prod_id' });
exports.Prod_Act.belongsTo(exports.Producto, { foreignKey: 'prod_id' });
exports.Actividad.hasMany(exports.Prod_Act, { foreignKey: 'act_id' });
exports.Prod_Act.belongsTo(exports.Actividad, { foreignKey: 'act_id' });
exports.Producto.hasMany(exports.Itinerario_Producto, { foreignKey: 'prod_id' });
exports.Itinerario_Producto.belongsTo(exports.Producto, { foreignKey: 'prod_id' });
exports.Tour.hasMany(exports.Itinerario_Tour, { foreignKey: 'tour_id' });
exports.Itinerario_Tour.belongsTo(exports.Tour, { foreignKey: 'tour_id' });
//El tour tambin tiene una provincia
exports.Provincia.hasMany(exports.Producto, { foreignKey: 'prov_id' });
exports.Producto.belongsTo(exports.Provincia, { foreignKey: 'prov_id' });
