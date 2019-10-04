import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasarelaService {
  ResultV:any[]=[]

  constructor() { }

pasarelaSet(arr:any[]){
  this.ResultV = arr
}

pasarelaGet(){
  return this.ResultV
}





}

