import { Router} from 'express'
import { getTourByProvincia} from '../Controllers/BusquedaPorProvincia'

export let Provin_Router = Router();
Provin_Router.get('/turism_by_prov/:prov',getTourByProvincia)