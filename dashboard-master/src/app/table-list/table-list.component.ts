import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/Modelos-BD/Producto-Model/Producto';
import {ServiceProductoService} from '../Services/service-producto.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  provincia:any
  Producto:any;
  constructor(private _sProductoService:ServiceProductoService) { }

  ngOnInit() {
    this.getProducto();
    this.getProvincias();
  };
  getProducto(){
    this._sProductoService.getListProducto().subscribe(res=>{
      this.Producto = res;
      console.log(res);
      
    },error=>{console.log(error);
    });
  }
  getProvincias(){
    this._sProductoService.getListProvincias().subscribe(
      res=>{
        this.provincia = res;
        console.log(this.provincia);
      },error=>{console.log(error);
      }
    );
  }
  Delete(prod_id:number){
    console.log(prod_id);
    this._sProductoService.postDeleteProducto(prod_id).subscribe(res=>{this.getProducto(); console.log(res);
    },error=>{console.log(error);
    });
  };
  UpdateDate(prod_id){
    console.log(prod_id);
    
  }
}
