import {Router} from 'express';
import * as Tours from './../Controllers/TourController';

export let Tour_Ruta = Router();

/* Crud de Tour:
    1- Registrar Tour.
*/
/* 1- */ Tour_Ruta.post('/tourRegistrar',Tours.RegistrarTour);
/* 2- */ Tour_Ruta.put('/tourUpdate/:p_tour_id',Tours.ActualizarTour);
/* 3- */ Tour_Ruta.post('/tourDelete/:p_tour_id',Tours.EliminarTour);

/* Crud Descripcion Tour:
    1- Add Descripcion Tour.
    2- Update Descripcion Tour.
    3- Delete Descripcion Tour.
*/
/*  1- */ Tour_Ruta.post('/tourAddDescripcion/:p_tour_id',Tours.AddDescripcionTour);
/*  2- */ Tour_Ruta.put('/tourDescripcionUpdate/:p_tour_id',Tours.UpdateDescripcionTour);
/*  3- */ Tour_Ruta.post('/tourDescripcionDelete/:p_desc_tour_id',Tours.DeleteDescripcionTour);

/* Crud Itinerario Tour: 
    1- Add Itinerario Tour.
    2- Update Itinerario Tour.
    3- Delete Itinerario Tour.
*/
/*  1- */ Tour_Ruta.post('/tourAddItinerario/:p_tour_id',Tours.AddItinerarioTour);
/*  2- */ Tour_Ruta.put('/tourUpdateItinerario/:p_iti_tour_id',Tours.UpdateItinerarioTour);
/*  3- */ Tour_Ruta.post('/tourDeleteItinerario/:p_iti_tour_id',Tours.DeleteItinerarioTour);
/* Relacionar Tour Con Producto */
Tour_Ruta.post('/tourAndProducto/:p_tour_id/:p_prod_id',Tours.TourAddProducto);

/* Filtros Mysql : */

Tour_Ruta.get('/listTour',Tours.ListadoTourForCity);
 




