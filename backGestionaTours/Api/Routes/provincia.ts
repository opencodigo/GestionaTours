import { Router} from 'express'
<<<<<<< Updated upstream
import { getTourByProvincia} from '../Controllers/provinvia'

export let Provin_Router = Router();
Provin_Router.get('/turism_by_prov/:prov',getTourByProvincia)
=======
<<<<<<< HEAD

import { getOnlyProvincia } from '../Controllers/TraerProvincias';

export let Provin_Router = Router();
Provin_Router.get('/provincia',getOnlyProvincia) 
=======
import { getTourByProvincia} from '../Controllers/provinvia'

export let Provin_Router = Router();
Provin_Router.get('/turism_by_prov/:prov',getTourByProvincia)
>>>>>>> master
>>>>>>> Stashed changes
