import {Router} from 'express';
import { getTourById } from '../Controllers/tour';


export let Tour_router = Router();

Tour_router.get('/Tour/:olaTur',getTourById)



 




