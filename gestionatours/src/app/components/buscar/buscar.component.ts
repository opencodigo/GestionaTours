import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  prov_id: Number = 0 ;
  provincias

  datoBuscar:DatoBusqueda = {
    provID:0,
    fechin:'2019-07-01',
    fechfin:'2020-01-05'
  }

  constructor(private _tour: TourService, private _sprovincia: ProvinciasService ,
    private _sRouter:Router) { }

  ngOnInit() {
    this._sprovincia.traerProvincias().then((provin: any) => {
      this.provincias = provin
    }
    ).catch((err) => {
      console.log({
        mensaje: 'no se trajo automaticamente las provincias',
        data: err
      })
    })
  }//onInit

  Gobusqueda({value,valid}:{value:DatoBusqueda,valid:boolean}){
    console.log()
    this.datoBuscar = value;
    console.log('estamos dentro del go busqueda, se armo la data de busqueda?');
    
     console.log(this.datoBuscar)
    // console.log('olaa busqueda')
    this._tour.pasarelaSet(this.datoBuscar);
    this._sRouter.navigate(['/tours']); 
  }

  cambio(){
    console.log(this.datoBuscar)
  }


}
