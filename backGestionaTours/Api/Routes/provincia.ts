import { Router} from 'express'

import { getOnlyProvincia } from '../Controllers/TraerProvincias';

export let Provin_Router = Router();
Provin_Router.get('/provincia',getOnlyProvincia) 