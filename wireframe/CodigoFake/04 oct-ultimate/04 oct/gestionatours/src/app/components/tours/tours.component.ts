import { Component, OnInit } from '@angular/core';
import { DatoBusqueda } from 'src/app/modelos/datosBusqueda';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  a_buscar:DatoBusqueda = {
    provID:0,
    fechin:'',
    fechfin:''
  }

  xxx:string;
  resultados:any[]=[];
  constructor(private _sTour:TourService) { 

    console.log('hola desde en contrctor')
  }

  ngOnInit() {
  console.log('hoolaa en el initt de tours')


    this.a_buscar = this._sTour.pasarelaGet()
    //console.log('Logramos pasar la data mediante un servicio')
    //console.log(this.a_buscar);
    this._sTour.TraerResultados(this.a_buscar).subscribe((rpta)=>{
   if(rpta){
this.resultados=rpta
   }else{
console.log('No hay nancy')
   }
      
    })

    
  }

  funcarCambiar(e:any){
    console.log('funcar cambiarrr')
    console.log(e)
    this.resultados = e
  }
    
  
  ola(a){
    this.resultados = a
  }
      

}
