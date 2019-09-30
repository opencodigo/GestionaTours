const Sequelize = require('sequelize');
import {usuario_model} from './../Models/UsuarioBD';

import {tour_model} from './../Models/TourBD';
import {producto_model} from './../Models/ProductoBD';
import {programacion_model} from './../Models/ProgramacionBD';

import {provincia_model} from './../Models/ProvinciaBD';
import {departamento_model} from './../Models/DepartamentoBD';
import {pais_model} from './../Models/PaisBD';

import {imagen_model} from './../Models/ImagenBD';
import {producto_imagen_model} from './../Models/Producto_ImagenDB';
import { reserva_model } from '../Models/ReservaBD';
import { factura_model } from '../Models/FacturaBD';
import { Tour_Producto_model } from '../Models/Tour_ProductoBD';
import { tipoUsuario_model } from '../Models/TipoUsuarioBD';
import { descripcion_model } from '../Models/DescripcionBD';
import { actividad_model } from '../Models/ActividadesBD';
import {  itinerario_prod_model } from '../Models/Itinerario_ProductoBD';
import { Prod_Act_model } from '../Models/Prod_Atc_BD';
import { Tour_Actividad_model } from '../Models/Tour_Act_BD';
import { itinerario_tour_model } from '../Models/itinerario_TourBD';





export const sequelize = new Sequelize('bd_gestiontours', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    timezone:'-05:00',
    /*dialectOptions:{
      useUTC:false,
      dateString:true, 
      typeCast:true
    }*/
});

export const Usuario = usuario_model(sequelize,Sequelize);

export const Tour = tour_model(sequelize,Sequelize);
export const Producto = producto_model(sequelize,Sequelize);
export const Programacion = programacion_model(sequelize,Sequelize);

export const Provincia = provincia_model(sequelize,Sequelize);
export const Departamento = departamento_model(sequelize,Sequelize);
export const Pais = pais_model(sequelize,Sequelize);

export const Imagen = imagen_model(sequelize,Sequelize);
export const Producto_Imagen = producto_imagen_model(sequelize,Sequelize);

export const Reserva = reserva_model(sequelize,Sequelize);
export const Factura = factura_model(sequelize,Sequelize);


export const Tour_producto = Tour_Producto_model(sequelize,Sequelize);
export const TipoUsuario = tipoUsuario_model(sequelize,Sequelize);
//----------------------------14 set 2019----------------------------//
export const Descripcion = descripcion_model(sequelize,Sequelize);
export const Actividad = actividad_model(sequelize,Sequelize);

//export const PuntoPartida = puntoPartida_model(sequelize,Sequelize);

export const Prod_Act = Prod_Act_model(sequelize,Sequelize);
export const Tour_Act = Tour_Actividad_model(sequelize,Sequelize);

export const Itinerario_Tour = itinerario_tour_model(sequelize,Sequelize);
export const Itinerario_Producto = itinerario_prod_model(sequelize,Sequelize);



// ---15 set 2019---agregando descripciones---/


//--17 set 2019 -------------------------------------------/



/* Relacionamiento de Tablas */

Tour.hasMany(Programacion,{foreignKey:'tour_id'});
Programacion.belongsTo(Tour,{foreignKey:'tour_id'});

Producto.hasMany(Programacion,{foreignKey:'prod_id'});
Programacion.belongsTo(Producto,{foreignKey:'prod_id'});

/*Provincia.hasMany(Producto,{foreignKey:'prov_id'});
Producto.belongsTo(Provincia,{foreignKey:'prov_id'});*/

Departamento.hasMany(Provincia,{foreignKey:'dep_id'})
Provincia.belongsTo(Departamento,{foreignKey:'dep_id'});

Pais.hasMany(Departamento,{foreignKey:'pais_id'});
Departamento.belongsTo(Pais,{foreignKey:'pais_id'});

Producto.hasMany(Producto_Imagen,{foreignKey:'prod_id'});
Producto_Imagen.belongsTo(Producto,{foreignKey:'prod_id'});

Imagen.hasMany(Producto_Imagen,{foreignKey:'img_id'});
Producto_Imagen.belongsTo(Imagen,{foreignKey:'img_id'});


/*Producto.belongsToMany(Imagen,{as: 'producto', through: 'producto_imagen',foreignKey:'prod_id'});
Imagen.belongsToMany(Producto,{as: 'imagen', through: 'producto_imagen',foreignKey:'img_id'});*/

Usuario.hasMany(Reserva,{foreignKey:'usu_id'});
Reserva.belongsTo(Usuario,{foreignKey:'usu_id'})

Factura.hasMany(Reserva,{foreignKey:'fact_id'});
Reserva.belongsTo(Factura,{foreignKey:'fact_id'});


//--------------------------------------Usuario Reserva detallar mas-----//
Usuario.hasMany(Reserva, {foreignKey:'usu_id'})
Reserva.belongsTo(Usuario,{foreignKey:'usu_id'})   
//-----------------------------------------------------------------------//
Usuario.belongsTo(TipoUsuario,{foreignKey:'tipoUsur_id'})
TipoUsuario.hasMany(Usuario,{foreignKey:'tipoUsur_id'})

//-------------------------------------------------//

      
Programacion.hasMany(Reserva,{foreignKey:'prog_id'});
Reserva.belongsTo(Programacion,{foreignKey:'prog_id'})


Tour.hasMany(Tour_producto,{foreignKey:'tour_id'});
Tour_producto.belongsTo(Tour,{foreignKey:'tour_id'});


Producto.hasMany(Tour_producto,{foreignKey:'prod_id'});
Tour_producto.belongsTo(Producto,{foreignKey:'prod_id'});

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

Tour.hasMany(Tour_Act,{foreignKey:'tour_id'})
Tour_Act.belongsTo(Tour,{foreignKey:'tour_id'})

Actividad.hasMany(Tour_Act,{foreignKey:'act_id'})
Tour_Act.belongsTo(Actividad,{foreignKey:'act_id'})


Producto.hasMany(Prod_Act,{foreignKey:'prod_id'})
Prod_Act.belongsTo(Producto,{foreignKey:'prod_id'})

Actividad.hasMany(Prod_Act,{foreignKey:'act_id'})
Prod_Act.belongsTo(Actividad,{foreignKey:'act_id'}) 

Producto.hasMany(Itinerario_Producto,{foreignKey:'prod_id'})
Itinerario_Producto.belongsTo(Producto,{foreignKey:'prod_id'})

Tour.hasMany(Itinerario_Tour,{foreignKey:'tour_id'})
Itinerario_Tour.belongsTo(Tour,{foreignKey:'tour_id'})

//________alex__descripcion
Producto.hasMany(Descripcion,{foreignKey:'prod_id'});
Descripcion.belongsTo(Producto,{foreignKey:'prod_id'});
/* Descripcion tOUR , Tour */






Provincia.hasMany(Producto,{foreignKey:'prov_id'});
Producto.belongsTo(Provincia,{foreignKey:'prov_id'});



 








