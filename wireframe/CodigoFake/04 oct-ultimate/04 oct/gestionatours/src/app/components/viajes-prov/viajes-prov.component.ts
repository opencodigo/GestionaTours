import { Component, OnInit } from '@angular/core';
import { ViajesByProvService } from 'src/app/services/viajes-by-prov.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viajes-prov',
  templateUrl: './viajes-prov.component.html',
  styleUrls: ['./viajes-prov.component.css']
})
export class ViajesProvComponent implements OnInit {
  viajesByProv:any[]=[];
  constructor(  private _sviajeprov:ViajesByProvService,
                private _sActivatedRoute:ActivatedRoute  ) { }

  ngOnInit() {

    this._sActivatedRoute.params.subscribe(parametros => {
      let {provid }= parametros
      console.log('lalalall proviss');
      this._sviajeprov.traerViajesByProvincia(provid).subscribe(rpta=>{
        this.viajesByProv = rpta
      })
    
      
    })
    //this._sviajeprov.traerViajesByProvincia()
  }

}
