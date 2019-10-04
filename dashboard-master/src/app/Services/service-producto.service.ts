import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from 'app/Modelos-BD/Producto-Model/Producto';
@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {

  URL =  'http://localhost:3000/';
  constructor(private _sProducto:HttpClient) { 

  }
  getListProvincias(){
    return this._sProducto.get(`${this.URL}provincias`);
  };
  getListTour(){
    
  }
  postAddProducto(Producto:Producto){
    return this._sProducto.post(`${this.URL}productoRegistro`,Producto)
  };

}
