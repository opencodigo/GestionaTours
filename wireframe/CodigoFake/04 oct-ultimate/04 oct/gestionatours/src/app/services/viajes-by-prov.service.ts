import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ViajesByProvService {

  constructor(private _shttp:HttpClient) { }




  traerViajesByProvincia(id_de_provincia:number):Observable<any>{
    console.log('estamos en viajesssssssssssssssssssssssss servio prvincia');
    console.log(id_de_provincia);
    console.log(`http://localhost:3000/provincia/${id_de_provincia}`);
    
    
    let misHeadres:HttpHeaders = new HttpHeaders();
    misHeadres.append('Content-type','application/json');

    return this._shttp.get(`http://localhost:3000/provincia/${id_de_provincia}`, {headers:misHeadres}).pipe(
      map((resultado:any)=>{
     console.log('___ este es reultado___')
     console.log(resultado)
  
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
                console.log('___provincias__');
                
                console.log(viajes);
                
        return viajes
      }))

  }



}
