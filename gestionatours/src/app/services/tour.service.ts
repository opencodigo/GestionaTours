import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatoBusqueda } from '../modelos/datosBusqueda';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TourService {
  tempDato:DatoBusqueda = {
    provID:0,
    fechin:'',
    fechfin:''
  }


  constructor(public _sHttp:HttpClient) { }
TraerResultados(datos:DatoBusqueda):Observable<any>{

  let misHeadres:HttpHeaders = new HttpHeaders();
  misHeadres.append('Content-type','application/json');


  return this._sHttp.post('http://localhost:3000/busqueda',datos,{headers:misHeadres}).pipe(

    map((resultado:any)=>{
      
   

      let viajes = resultado.map(element => {
        let oli:any
           
           let arrayActTour:any[]=[];
           let arrayActProd:any[]=[];
                if(Object.keys(element).length === 5){

                  element.t_tour_actividads.forEach(elemenT => {
                  arrayActTour.push(elemenT.t_actividad.act_descrip)}) //fin del foreach;
                   oli = {
                    id : element.tour_id,
                    nombre:element.tour_nom,
                    precio:element.tour_prec,
                    actividades:arrayActTour.join(','),
                    tipo:'tour'
                  }
                  //console.log('este mi turcuti')
                  //console.log(tour)
                 // todos.push(tour);
                
                  }
                
                else if(Object.keys(element).length === 6){
                  element.t_producto_actividads.forEach((elemenP)=>{
                  arrayActProd.push(elemenP.t_actividad.act_descrip)})// fin del foreach
                   oli = {
                    id : element.prod_id,
                    nombre:element.prod_nom,
                    precio:element.prod_prec,
                    actividades:arrayActProd.join(','),
                    tipo:'producto'
                  }
                  //console.log('ese es un producto')
                  //console.log(producto)
                  //todos.push(producto);
                }
            
                return oli


        
        

      });

      return viajes
    }))
    
}


busquedaById(id:number,tipo:string){
  if(tipo === 'tour'){
    // conectar  post('localhost:3000/busquedaxid/:IDtour')
}
else{
// conectar  post('localhost:3000/busquedaxid/:IDPRodcuto')
}
}




pasarelaSet(dato:DatoBusqueda){
  this.tempDato = dato
}

pasarelaGet(){
  return this.tempDato
}



}//fin de servcio tour
