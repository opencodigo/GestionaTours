import { Component, OnInit } from '@angular/core';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';

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

  constructor(private _sTours:TourService) { }

  ngOnInit() {
  }

  Gobusqueda({value,valid}:{value:DatoBusqueda,valid:boolean}){
    this.datoBuscar = value;
    console.log(this.datoBuscar)
    console.log('olaa busqueda')

    this._sTours.TraerResultados(value).subscribe((data)=>{
   console.log(' vista de servicio');
   
      console.log(data)


     })

  }

  

}//fin del compoente
