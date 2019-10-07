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
  getListProducto(){
    return this._sProducto.get(`${this.URL}ListProducto`);
  }
  postAddProducto(Producto:Producto){
    return this._sProducto.post(`${this.URL}productoRegistro`,Producto)
  };
  postDeleteProducto(prod_id:number){
    return this._sProducto.delete(`${this.URL}productoDelete/${prod_id}`);
  };
  putUpdateProducto(prod_id:number,Producto:Producto){
    return this._sProducto.put(`${this.URL}/productoUpdate/${prod_id}`,Producto);
  };

}
