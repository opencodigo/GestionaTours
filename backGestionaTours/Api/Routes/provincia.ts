import { Router} from 'express'

import { getOnlyProvincia } from '../Controllers/TraerProvincias';

export let Provin_Router = Router();
Provin_Router.get('/provincia',getOnlyProvincia) 

import { getTourByProvincia} from '../Controllers/provinvia'

export let Provin_Router = Router();
Provin_Router.get('/turism_by_prov/:prov',getTourByProvincia)


import { getOnlyProvincia } from '../Controllers/TraerProvincias';

export let Provin_Router = Router();
Provin_Router.get('/provincia',getOnlyProvincia) 

import { getTourByProvincia} from '../Controllers/provinvia'

export let Provin_Router = Router();
Provin_Router.get('/turism_by_prov/:prov',getTourByProvincia)

