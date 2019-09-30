import {Router} from 'express';
import * as Product from './../Controllers/ProductoController';

export let Producto_ruta = Router();
/* Crud de Productos :
    1- Insertar Productos.
    2- Actualizar Producto.
    3- Eliminar Producto.
 */
/* 1- */ Producto_ruta.post('/productoRegistro',Product.RegistrarProducto);
/* 2- */ Producto_ruta.put('/productoUpdate/:p_prod_id',Product.ActualizarProducto);
/* 3- */ Producto_ruta.post('/productoDelete/:p_prod_id',Product.EliminarProducto);
 /* Crud de Descripcion Producto:
    1- Insertar Descripcion Producto.
    2- Actualizar Descripcion Producto.
    3- Eliminar Descripcion Producto.
*/
/* 1- */ Producto_ruta.post('/productoDescripcion/:p_prod_id',Product.AgregarDescripcion);
/* 2- */ Producto_ruta.put('/ProductoDescripcionUpdate/:p_desc_prod_id',Product.ActualizarDescripcion);
/* 3- */ Producto_ruta.post('/productoDescripcionDelete/:p_desc_prod_id',Product.EliminarDescripcion);
/* Crud de Itinirarios Producto:
    1- Agregrar Itinerario:
    2- Actualizar Itinerario:
    3- Eliminar Itinerario
*/
/* 1- */ Producto_ruta.post('/ProductoItinerario/:p_prod_id',Product.AgregarItinirario);
/* 2- */ Producto_ruta.put('/ProductoUpdateItinerario/:p_iti_prod_id',Product.ActualizarItinerario);
/* 3- */ Producto_ruta.post('/ProductoItinerarioDelete/:p_iti_prod_id',Product.EliminarItinerario);
/* Agregar Imagen Producto 
    1- Add Imagen Producto.
*/
/* 1- */ Producto_ruta.post('/ProductoImagen',Product.SubirImagenProducto);

