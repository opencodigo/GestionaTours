import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-minicards',
  templateUrl: './minicards.component.html',
  styleUrls: ['./minicards.component.css']
})
export class MinicardsComponent implements OnInit {
@Input() listaDeCards:any = []

  constructor(private _sRouter:Router) { }

  ngOnInit() {
  }

 verDetalle(elemento:any){
 
   if(elemento.tipo === "tour"){
    let tourID = elemento.id
    let tipo = elemento.tipo
    let prog_id = elemento.prog_id
    //console.log('es un turr')
    this._sRouter.navigate(["/destino",tipo,prog_id])
   }

   else if(elemento.tipo === "producto" ){
    let prodID = elemento.id
      let tipo = elemento.tipo
      let prog_id = elemento.prog_id
    //console.log('es un producto')
    //console.log(elemento.prog_id)

    this._sRouter.navigate(["/destino",tipo,prog_id])
   }
   
 } 

}
