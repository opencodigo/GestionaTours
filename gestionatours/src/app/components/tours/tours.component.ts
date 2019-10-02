import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';
=======
>>>>>>> master

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
<<<<<<< HEAD
  a_buscar:DatoBusqueda = {
    provID:0,
    fechin:'',
    fechfin:''
  }

  resultados:any[]=[];
  constructor(private _sTour:TourService) { 

    console.log('hola desde en contrctor')
  }

  ngOnInit() {
  console.log('hoolaa en el initt')

    this.a_buscar = this._sTour.pasarelaGet()
    //console.log('Logramos pasar la data mediante un servicio')
    //console.log(this.a_buscar);
    this._sTour.TraerResultados(this.a_buscar).subscribe((rpta)=>{
      //la consulta principal se realia aqui mismo con datos traidos por un servicio 
      console.log('del Tours compoent init');
      
      console.log(rpta)
      this.resultados=rpta
    })

    
  }


      
      

=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> master
}
