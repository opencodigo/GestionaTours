import { Router} from 'express'
import { getBusquedabyDep } from '../Controllers/BusquedaByDep';



export let ByDep_Router = Router();
ByDep_Router.get('/porDepartamento',getBusquedabyDep) 