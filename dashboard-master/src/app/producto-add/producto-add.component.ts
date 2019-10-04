import { Component, OnInit } from '@angular/core';
import {ServiceProductoService} from '../Services/service-producto.service';
import { Producto } from 'app/Modelos-BD/Producto-Model/Producto';
@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.scss']
})
export class ProductoAddComponent implements OnInit {


  provincia:any = {
    prov_id:0,
    prov_nom:''
  };

  Producto:Producto = {
    prod_id:0,
    prod_nom:'',
    prod_prec:'',
    prov_id:0
  };

  constructor(private _sProductoService:ServiceProductoService) { }

  ngOnInit() {
    this._sProductoService.getListProvincias().subscribe(
      res=>{
        this.provincia = res;
        console.log(this.provincia);
      },error=>{console.log(error);
      }
    );
  };
  SaveProducto(prov_id:number){
    console.log(prov_id);
    this.Producto.prov_id = prov_id;
    this._sProductoService.postAddProducto(this.Producto).subscribe(res =>{
      console.log(res);
    },error => {console.log(error);});
    
    
  };
  
  
}
