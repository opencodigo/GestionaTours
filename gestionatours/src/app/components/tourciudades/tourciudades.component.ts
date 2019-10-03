import { Component, OnInit } from '@angular/core';
import {ServiceTurismoService} from '../../servicesAlex/service-turismo.service';

@Component({
  selector: 'app-tourciudades',
  templateUrl: './tourciudades.component.html',
  styleUrls: ['./tourciudades.component.css']
})
export class TourciudadesComponent implements OnInit {

  TourLIst:any;
  constructor(private _sTurismosService:ServiceTurismoService) { }

  ngOnInit() {
    this._sTurismosService.getTourMenorCuatro().subscribe(
      res =>{this.TourLIst = res;},
      error =>{console.log(error);}
    );
  }

}
