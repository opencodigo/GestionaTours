import { Request, Response } from "express";
import { sequelize, Programacion, Producto, Tour, Tour_Act, Prod_Act } from './../Config/ConexionSequelize'


export let getBusqueda = (req: Request, res: Response)=>{

    Busqueda(req).then( rpta=>{
        res.json(rpta)
    })
   }

let Busqueda = async(req: Request, ) => {
        console.log('Esto me cae por el body')
        console.log(req.body.fechin)
        let busqueda_front = await sequelize.query(`select prog_id from t_programacion join t_tour_producto on t_programacion.tour_id = t_tour_producto.tour_id
        join t_producto on t_tour_producto.prod_id = t_producto.prod_id where prov_id=${req.body.provID} and prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	
        union select prog_id from t_programacion join t_producto on t_programacion.prod_id = t_producto.prod_id where prov_id = ${req.body.provID}	group by prog_id and 
        prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	`);

        var dataArray:any[] = [];
      
        //comodin contiene array de array de prod:id + tur_id
        let comodin = await Promise.all ( busqueda_front[0].map( async(element:any) => 
            {
             //sequelize.query(`select tour_id, prod_id from t_programacion where prog_id=${element.prog_id}`)
                        return Programacion.findAll({
                        attributes: ['tour_id','prod_id'],
                        where:[{
                            prog_id:element.prog_id
                        }]
                       })
            }))

         //sacando de sus llaves   
         comodin.forEach((comodincito:any)=>{
          dataArray.push(comodincito[0])   
         });

         var ProdTurArr:any = [];
         var ProdTurArr2:any = [];
         //se puede hacer una interfaz de prod_tour { prod_id = , }
         let comodin2 = await Promise.all( dataArray.map(async(prod_tour:any)=>{
         console.log(prod_tour);
            if(prod_tour.prod_id !== 1){
              let productito = await Producto.findAll({
                    where:{
                        prod_id:prod_tour.prod_id
                  
                    },
                    include:[{
                        model:Prod_Act
                    }]
                  
                })
                ProdTurArr.push( productito )
            }else{
                let tourcito = await Tour.findAll({
                    where:{
                        tour_id:prod_tour.tour_id                                                                                                                                                                 
                    },
                    include:[{
                        model:Tour_Act
                    }]
                    
                   
                })
                ProdTurArr.push(tourcito)
            }
         })) 

         ProdTurArr.forEach((element:any) => {
             ProdTurArr2.push(element[0])
             
         });



return ProdTurArr2
}