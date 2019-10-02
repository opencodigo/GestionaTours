import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  provincias

  constructor(private _sHttp:HttpClient) { }
  traerProvincias(){
    return new Promise((resolve,reject)=>{
      if(this.provincias){
        resolve(this.provincias)
      }else{
        this._sHttp.get('http://localhost:3000/provincia').subscribe( (data:any)=>{
    
          this.provincias = data;
          console.log('servicio')
           resolve(this.provincias)
        })
      }
    
    })
    
      
    }
    
}
