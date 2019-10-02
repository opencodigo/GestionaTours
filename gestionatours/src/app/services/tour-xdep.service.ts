import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourXdepService {
tourxdep;
  constructor(private _sHttp:HttpClient) { }

   traerTourxDeps():Observable<any>{
return  this._sHttp.get('http://localhost:3000/porDepartamento').pipe(
          map((resultado:any)=>{
           // console.log('___ este es reultado___')
         //console.log(resultado)
      
            let viajes = resultado.map(element => {
      
            
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
                          prog_id:element.prog_id,
                          prog_dura:element.prog_dura
                        }
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
                          prog_id:element.prog_id,
                          prog_dura:element.prog_dura
                        }
                       //7 console.log('este mi proddd')
                        //console.log(oli)
                       // todos.push(tour);
                      }
                  
                      return oli
      
      
              
              
      
            
                    });//viajes
      
            return viajes
          }))
  
    
      
    }


}
