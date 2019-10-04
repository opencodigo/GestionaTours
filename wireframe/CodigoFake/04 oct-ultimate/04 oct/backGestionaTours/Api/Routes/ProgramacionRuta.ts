import { Router } from 'express'

import { RegistrarProgramacion, UpdateProgramacion, EliminarProgramacion } from '../Controllers/ProgramacionController';

export let Programacion_ruta = Router();

Programacion_ruta.post('/programacionRegistro',RegistrarProgramacion);
Programacion_ruta.put('/programacionActualisada',UpdateProgramacion);
Programacion_ruta.delete('/programacionEliminar/:p_prog_id',EliminarProgramacion);