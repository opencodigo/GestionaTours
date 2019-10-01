import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styles: []
})
export class DestinoComponent implements OnInit {

  constructor(private _sActivatedRouter:ActivatedRoute,
              private _sTour:TourService  ) { }

  ngOnInit() {
    this._sActivatedRouter.params.subscribe( parametros =>{
      //console.log('___EStos son los parametros___')
      //console.log(parametros);
      let {tipo,prog_id} = parametros
      //console.log(tipo);
      console.log(prog_id);
      
      

      this._sTour.busquedaById(tipo,prog_id).subscribe((rpta)=>{
        console.log('estosdatossedesplegaran , es un dato unico DESDE DESTINO COMPOENT')
        console.log(rpta)
      })
      
    })


  }

}
