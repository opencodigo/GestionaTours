import { Router} from 'express'

import { getOnlyProvincia } from '../Controllers/TraerProvincias';
import { getBusquedabyProvincia } from '../Controllers/BusquedabyProvincia';

export let Provin_Router = Router();
Provin_Router.get('/provincia',getOnlyProvincia) 

export let busquedaProvincia_Router = Router();
busquedaProvincia_Router.get('/provincia/:provID',getBusquedabyProvincia);