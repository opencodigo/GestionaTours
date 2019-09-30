import {Router} from 'express';
import { getTourById } from '../Controllers/BusquedaByTour';


export let Tour_router = Router();

Tour_router.get('/Tour/:tourID',getTourById)



 




