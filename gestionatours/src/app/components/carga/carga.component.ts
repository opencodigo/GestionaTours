import { Component, OnInit } from '@angular/core';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  a_buscar:DatoBusqueda = {
    provID:0,
    fechin:'',
    fechfin:''
  }
resultados:any[]=[];
  constructor(private _sTour:TourService) { }

  ngOnInit() {
    this.a_buscar = this._sTour.pasarelaGet()
    //console.log('Logramos pasar la data mediante un servicio')
    //console.log(this.a_buscar);
    this._sTour.TraerResultados(this.a_buscar).subscribe((rpta)=>{
      //console.log('estos son los resultados desde el carga compo');
      //console.log(rpta)
      this.resultados=rpta
    })
    
  }

}
