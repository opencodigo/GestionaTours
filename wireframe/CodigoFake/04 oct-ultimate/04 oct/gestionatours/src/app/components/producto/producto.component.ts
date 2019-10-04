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
    precio: "0",
    tipo: "",
    titulo: ""
  }
  multiplicadorA: number = 1;
  multiplicadorN: number = 0;
  multplicadorA_anterior = 0;
  multplicadorN_anterior = 0;

  total: number = 1;
  precio: number = 1;

  constructor(private _sActivatedRouter: ActivatedRoute,
    private _sTour: TourService) {

  }

  ngOnInit() {
    this._sActivatedRouter.params.subscribe(parametros => {

      console.log('___EStos son los parametros___')
      console.log(parametros);
      let { tipo, prog_id } = parametros
      console.log(tipo);
      console.log(prog_id);
      this._sTour.busquedaById(tipo, prog_id).subscribe((objeto) => {
        this.rpta = objeto[0];
        console.log('estosdatossedesplegaran , es un datoaui')
        console.log(objeto[0].precio);
        this.precio = +objeto[0].precio
        this.total = +objeto[0].precio;

      })
    })
  }


  bindin1() {
    if (this.multplicadorA_anterior < this.multiplicadorA) {
      console.log('ha subido');
      this.multplicadorA_anterior = this.multiplicadorA
      this.total = this.total + this.precio
    }
    else {
      console.log('ha disminuido');
      this.multplicadorA_anterior = this.multiplicadorA
      this.total = this.total - this.precio
    }
  }

  bindin2(){

    if(this.multplicadorN_anterior < this.multiplicadorN){
    console.log('ha subido en niños');
    this.multplicadorN_anterior = this.multiplicadorN
    this.total = this.total + this.precio
  }
  else {
    console.log('ha disminuido en niños ');
    this.multplicadorN_anterior = this.multiplicadorN
    this.total = this.total - this.precio
  }

  }



}
