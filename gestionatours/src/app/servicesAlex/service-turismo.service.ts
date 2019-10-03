import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceTurismoService {

  URL = 'http://localhost:3000';

  constructor(private _sTurismoList: HttpClient) {

  }
  getTourMenorCuatro() {
    return this._sTurismoList.get(`${this.URL}/listTour`);
  };
}
