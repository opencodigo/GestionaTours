import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesTourService {

  URL:string = 'http://localhost:3000/';

  constructor(private _sServicioTour:HttpClient) {

   };
   
   getLIstadoTour(){

   };
   postAddTour(Tour:any){
     
   };
   putUpdateTour(id:number){

   };
   postDeleteTour(id:number){

   };
   postAddDescripcionTour(idTour:number,desc:any){

   };
   putUpdateDescriptionTour(idDesc:number,desc:any){

   };
   postDeleteDecripcionTour(idDesc:number){

   };
   postAddItinerarioTour(idTour:number,Itin:any){

   };
   postUpdateItinerarioTour(idItin:number){

   };
   postDeleteItineerarioTour(idItin:number){

   };
   postAddTourForProducto(idTour:any,idProd:any){

   };

}
