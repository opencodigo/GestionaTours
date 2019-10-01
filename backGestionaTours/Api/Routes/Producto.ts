import {Router} from 'express';
import { getProductoById } from '../Controllers/BusquedaaByProducto';


export let Producto_router = Router();

Producto_router.get('/Producto/:prog_id',getProductoById)



 




