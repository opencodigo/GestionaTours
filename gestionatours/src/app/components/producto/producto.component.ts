import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  rpta = {
    actividades: "",
    capacidad: 0,
    descripciones: "",
    duracion: "",
    fechfin: "",
    fechin: "",
    itinerario: "",
    lugares: "",
    precio: "",
    tipo: "",
    titulo: ""
  }


  constructor(private _sActivatedRouter: ActivatedRoute,
    private _sTour: TourService) { }

  ngOnInit() {
    this._sActivatedRouter.params.subscribe(parametros => {
      console.log('___EStos son los parametros___')
      console.log(parametros);
      let { tipo, prog_id } = parametros
      console.log(tipo);
      console.log(prog_id);
      this._sTour.busquedaById(tipo, prog_id).subscribe((objeto) => {
        console.log('estosdatossedesplegaran , es un datoaui')
        console.log(objeto)
        this.rpta = objeto[0]

      })

    })

  }

}
