import { Component, OnInit } from '@angular/core';
import {ServiceTourService} from '../Services/service-tour.service';
import { Tour } from 'app/Modelos-BD/Tour-Model/Tour';

@Component({
  selector: 'app-tour-add',
  templateUrl: './tour-add.component.html',
  styleUrls: ['./tour-add.component.scss']
})
export class TourAddComponent implements OnInit {


  Tour:Tour = {
    tour_id:0,
    tour_nom:'',
    tour_prec:0,
    tour_img:''
  };
  constructor(private _sTourService:ServiceTourService) { }

  ngOnInit() {

  }
  SaveTour(){

    console.log(this.Tour);
    this._sTourService.postAddTour(this.Tour).subscribe(res =>{
      console.log(res);
      
    }, error =>{console.log(error);
    });
  };
}
