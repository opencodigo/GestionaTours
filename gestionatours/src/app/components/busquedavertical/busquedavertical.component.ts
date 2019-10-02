import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';
import { Router } from '@angular/router';
import { ProvinciasService } from 'src/app/services/provincias.service';
=======
>>>>>>> master

@Component({
  selector: 'app-busquedavertical',
  templateUrl: './busquedavertical.component.html',
  styleUrls: ['./busquedavertical.component.css']
})
export class BusquedaverticalComponent implements OnInit {
<<<<<<< HEAD
  provincias;
  resultsVer;
  datoBuscar:DatoBusqueda = {
    provID:0,
    fechin:'2019-07-01',
    fechfin:'2020-01-05'
  }
  constructor(private _sTourService:TourService ,
              private _sRouter:Router,
              private _sprovincia:ProvinciasService   ) { }

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
    console.log( ' se hio click en busqueda vertical')
    // this.datoBuscarr = value;
    console.log(value);
    this._sTourService.TraerResultados(value).subscribe((res)=>{
      console.log(res);
      this.resultsVer = res;
      
    })
    //  console.log(this.datoBuscarr)
    // // console.log('olaa busqueda')
    // this._sTourService.pasarelaSet(this.datoBuscarr);
    
    
=======

  constructor() { }

  ngOnInit() {
>>>>>>> master
  }

}
