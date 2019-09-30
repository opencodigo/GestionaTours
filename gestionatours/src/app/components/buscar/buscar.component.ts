import { Component, OnInit } from '@angular/core';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  datoBuscar:DatoBusqueda = {
    provID:0,
    fechin:'2019-08-01',
    fechfin:'2019-10-05'
  }

  constructor(private _sTours:TourService , private _sRouter:Router) { }

  ngOnInit() {
  }

  Gobusqueda({value,valid}:{value:DatoBusqueda,valid:boolean}){
    this.datoBuscar = value;
    // console.log(this.datoBuscar)
    // console.log('olaa busqueda')
    this._sTours.pasarelaSet(this.datoBuscar);
    this._sRouter.navigate(['/encontrados']); 
  }

  

}//fin del compoente
