import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatoBusqueda } from '../modelos/datosBusqueda';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class TourService {

  tempDato:DatoBusqueda = {
    provID:0,
    fechin:'',
    fechfin:''
  }

  provincias:Array<any>

  constructor(public _sHttp:HttpClient) { }
TraerResultados(datos:DatoBusqueda):Observable<any>{

  let misHeadres:HttpHeaders = new HttpHeaders();
  misHeadres.append('Content-type','application/json');


  return this._sHttp.post('http://localhost:3000/busqueda',datos,{headers:misHeadres}).pipe(

    map((resultado:any)=>{
     // console.log('___ este es reultado___')
   //console.log(resultado)

      let viajes = resultado.map(element => {

        console.log('___ola___')
        console.log(element)
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
                  console.log('este mi proddd')
                  console.log(oli)
                 // todos.push(tour);
                }
            
                return oli


        
        

      
              });//viajes

      return viajes
    }))
    
}


busquedaById(tipo:string,prog_id:number):Observable<any>{

  if(tipo === 'tour'){
    
     let misHeadres:HttpHeaders = new HttpHeaders();
     misHeadres.append('Content-type','application/json');
     return   this._sHttp.get( `http://localhost:3000/Tour/${prog_id}` ,{headers:misHeadres}).pipe(
       map((resultado:any)=>{
         //console.log('segundo mapeo del dia');
         //console.log(resultado);
         let datosTour = resultado.map((rpta)=>{
          let ArrDep:any[]=[];
          let ArrDesc:any[]=[];
          let ArrAct:any[]=[];
          let ArrIti:any[]=[];

           //console.log('__accediendo__rpta');
         // console.log(rpta)

          rpta.t_tour.t_tour_productos.forEach((dep)=>{
            
            ArrDep.push(dep.t_producto.t_provincium.t_departamento.dep_nom)
          })

          rpta.t_tour.t_descripcion_tours.forEach((desc)=>{
            ArrDesc.push(desc.descripcion)
          })

          rpta.t_tour.t_tour_actividads.forEach((act)=>{
            ArrAct.push(act.t_actividad.act_descrip)
          })

          rpta.t_tour.t_itinerario_tours.forEach((iti)=>{
            //iti.iti_prod_desc
            ArrIti.push(iti.iti_tour_desc)
          })
  

          //console.log(ArrIti);
          

          let Tur = {
            lugares:ArrDep,
            duracion:rpta.prog_dura,
            capacidad:rpta.prog_cap,
            titulo:rpta.t_tour.tour_nom,
            descripciones:ArrDesc,
            actividades:ArrAct,
            itinerario:ArrIti,
            fechin:rpta.prog_fechin,
            fechfin:rpta.prog_fechfin,
            precio:rpta.prog_prec,
            tipo:'Tour'
          } 
          //console.log(Tur);
          
return Tur
         })
         
         return datosTour

       })
     )





}
else if (tipo === 'producto'){

  let misHeadres:HttpHeaders = new HttpHeaders();
  misHeadres.append('Content-type','application/json');
  return this._sHttp.get(`http://localhost:3000/Producto/${prog_id}` ,{headers:misHeadres}).pipe(
    map((resultado:any)=>{
      console.log('primer mapeo del dia! ')
      console.log(resultado);
      let datosProducto = resultado.map((rpta)=>{

        console.log(' accediendo a dep');
        
        //console.log(rpta.t_producto.t_itinerario_productos)
        let product:any
        let ArrAct:any[] = [];
        let ArrIti:any[] = [];
        let ArrDesc:any[] = [];

        rpta.t_producto.t_producto_actividads.forEach((act)=>{
          ArrAct.push(act.t_actividad.act_descrip)
        })
        //console.log(ArrAct)

        rpta.t_producto.t_itinerario_productos.forEach((iti)=>{
          //iti.iti_prod_desc
          ArrIti.push(iti.iti_prod_desc)
        })


        rpta.t_producto.t_descripcions.forEach((desc)=>{
          ArrDesc.push(desc.desc_titulo)
        })

        //console.log(ArrDesc)
        


        product={
          lugares:rpta.t_producto.t_provincium.t_departamento.dep_nom,
          duracion:rpta.prog_dura,
          capacidad:rpta.prog_cap,
          titulo:rpta.t_producto.prod_nom,
          descripciones:ArrDesc,
          actividades:ArrAct,
          itinerario:ArrIti,
          fechin:rpta.prog_fechin,
          fechfin:rpta.prog_fechfin,
          precio:rpta.prog_prec,
          tipo:'Producto'
        }
        console.log(product);
        

        return product;
      })//datosProducto
        return datosProducto;
    })

  )

}
}




//----------------------------------usados para pasar datos entre compentes------------------------//
pasarelaSet(dato:DatoBusqueda){
  this.tempDato = dato
}

pasarelaGet(){
  return this.tempDato
}



}//fin de servcio tour