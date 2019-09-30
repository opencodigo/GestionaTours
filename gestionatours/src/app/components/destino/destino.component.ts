import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styles: []
})
export class DestinoComponent implements OnInit {

  constructor(private _sActivatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this._sActivatedRouter.params.subscribe( parametros =>{
      console.log('___EStos son los parametros___')
      console.log(parametros);
      let {id,tipo,prog_id} = parametros
      
    })


  }

}
