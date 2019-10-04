import { Component, OnInit } from '@angular/core';
import { TourXdepService } from 'src/app/services/tour-xdep.service';

@Component({
  selector: 'app-toursxdep',
  templateUrl: './toursxdep.component.html',
  styleUrls: ['./toursxdep.component.css']
})
export class ToursxdepComponent implements OnInit {

  toursPorDep:any[]=[];
  constructor(private _stourByDep:TourXdepService) { }

  ngOnInit() {
      this._stourByDep.traerTourxDeps().subscribe((datos)=>{
      console.log(datos)
      this.toursPorDep = datos
    })
  }


}
