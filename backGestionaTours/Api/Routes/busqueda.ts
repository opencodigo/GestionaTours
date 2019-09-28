import {Router} from 'express'
import { getBusqueda } from '../Controllers/Busqueda';

export let BusquedaTotal_Router = Router();
BusquedaTotal_Router.post('/busqueda',getBusqueda)