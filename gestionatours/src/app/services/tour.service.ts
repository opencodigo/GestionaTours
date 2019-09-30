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
     // console.log('___ este es reultado___')
   //console.log(resultado)

      let viajes = resultado.map(element => {

      //  console.log('___ola___')
        //console.log(element)
           let oli:any
           let arrayActTour:any[]=[];
           let arrayActProd:any[]=[];
                if(element.tipo === 'tour'){

                  element.contenido.t_tour_actividads.forEach(elemenT => {
                  arrayActTour.push(elemenT.t_actividad.act_descrip)}) //fin del foreach;
                   oli = {
                    id : element.contenido.tour_id,
                    nombre:element.contenido.tour_nom,
                    precio:element.contenido.tour_prec,
                    actividades:arrayActTour.join(','),
                    tipo:'tour',
                    prog_id:element.prog_id
                  }
                  console.log('este mi turcuti')
                  console.log(oli)
                 // todos.push(tour);
                
                  }
                
                else if(element.tipo === 'producto'){
                  element.contenido.t_producto_actividads.forEach((elemenP)=>{
                  arrayActProd.push(elemenP.t_actividad.act_descrip)})// fin del foreach
                   oli = {
                    id : element.contenido.prod_id,
                    nombre:element.contenido.prod_nom,
                    precio:element.contenido.prod_prec,
                    actividades:arrayActProd.join(','),
                    tipo:'producto',
                    prog_id:element.prog_id
                    
                  }

                  console.log('este mi proddd')
                  console.log(oli)
                 // todos.push(tour);
               
                }
            
                return oli


        
        

      });

      return viajes
    }))
    
}


busquedaById(id:number,tipo:string,prog_id:number){
  if(tipo === 'tour'){
    // conectar  post('localhost:3000/busquedaByTour/:IDtour/:prog_id')
}
else{
// conectar  post('localhost:3000/busquedaByProducto/:IDPRodcuto/:prog_id')
}
}




pasarelaSet(dato:DatoBusqueda){
  this.tempDato = dato
}

pasarelaGet(){
  return this.tempDato
}



}//fin de servcio tour
