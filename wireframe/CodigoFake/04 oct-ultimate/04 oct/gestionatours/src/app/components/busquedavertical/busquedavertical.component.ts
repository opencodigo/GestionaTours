import { Component, OnInit, EventEmitter } from '@angular/core';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';
import { Router } from '@angular/router';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { PasarelaService } from 'src/app/services/pasarela.service';
import { Output }from '@angular/core'

@Component({
  selector: 'app-busquedavertical',
  templateUrl: './busquedavertical.component.html',
  styleUrls: ['./busquedavertical.component.css']
})
export class BusquedaverticalComponent implements OnInit {
  provincias;
  resultsVer;

@Output() cambio =  new EventEmitter(); 








  datoBuscar:DatoBusqueda = {
    provID:0,
    fechin:'2019-07-01',
    fechfin:'2020-01-05'
  }
  constructor(private _sTourService:TourService ,
              private _sRouter:Router,
              private _sprovincia:ProvinciasService ,
              private _spasarela:PasarelaService  ) { }

  ngOnInit() { this._sprovincia.traerProvincias().then((provin: any) => {
    this.provincias = provin
  }
  ).catch((err) => {
    console.log({
      mensaje: 'no se trajo automaticamente las provincias',
      data: err
    })
  })
  }

  GobusquedafromVertical({value,valid}:{value:DatoBusqueda,valid:boolean}){
 
            this._sTourService.TraerResultados(value).subscribe((res)=>{
              this.resultsVer = res;
              this._sRouter.navigate(['/tours']) 
                this._spasarela.pasarelaSet(this.resultsVer)
                console.log('resultados de vericas');
                
                console.log(this.resultsVer)
                console.log('rl siguiten es la emicion');
                
                this.cambio.emit(this.resultsVer)
    })
   
   
    
  }


  

}
