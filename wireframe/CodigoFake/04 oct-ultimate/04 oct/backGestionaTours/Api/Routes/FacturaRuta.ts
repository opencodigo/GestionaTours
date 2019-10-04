import { Router } from 'express'
import { RegistrarFactura, UpdateFactura, EliminarFactura } from '../Controllers/FacturaController';

export let Factura_ruta = Router();

Factura_ruta.post('/facturaRegistro',RegistrarFactura);
Factura_ruta.put('/facturaActualisada',UpdateFactura);
Factura_ruta.delete('/facturaEliminar/:p_fact_id',EliminarFactura);