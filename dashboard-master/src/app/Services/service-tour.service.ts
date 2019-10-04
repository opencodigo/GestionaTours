import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import {Tour} from '../Modelos-BD/Tour-Model/Tour';

@Injectable({
  providedIn: 'root'
})
export class ServiceTourService {

  URL =  'http://localhost:3000/';
  constructor(private _sTour:HttpClient) { 

  }
  postAddTour(Tour:Tour){
    return this._sTour.post(`${this.URL}tourRegistrar`,Tour);
  }
}
