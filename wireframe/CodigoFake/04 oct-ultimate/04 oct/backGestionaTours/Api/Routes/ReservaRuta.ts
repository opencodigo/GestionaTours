import { Router } from 'express'

import { RegistrarReserva, UpdateReserva, EliminarReserva } from '../Controllers/ReservaController';

export let Reserva_ruta = Router();

Reserva_ruta.post('/ReservaRegistro',RegistrarReserva);
Reserva_ruta.put('/ReservaActualisada',UpdateReserva);
Reserva_ruta.delete('/ReservaEliminar/:p_res_id',EliminarReserva);