import { Request, Response } from "express";
import { sequelize, Producto, Tour, Tour_Act, Prod_Act, Actividad, Programacion } from './../Config/ConexionSequelize'


export let getBusquedabyProvincia = (req: Request, res: Response)=>{

    Busqueda(req).then( rpta=>{
        res.json(rpta)
    })
   }

let Busqueda = async(req: Request, ) => {
        console.log('Esto me cae por el body')
        console.log(req.params.provID)
        let busqueda_front = await sequelize.query(`select prog_id from t_programacion join t_tour_producto on t_programacion.tour_id = t_tour_producto.tour_id
        join t_producto on t_tour_producto.prod_id = t_producto.prod_id where prov_id=${req.params.provID} 	
        union select prog_id from t_programacion join t_producto on t_programacion.prod_id = t_producto.prod_id where prov_id = ${req.params.provID}	group by prog_id  	`);

        var dataArray:any[] = [];
      
        //comodin contiene array de array de prod:id + tur_id
        let comodin = await Promise.all ( busqueda_front[0].map( async(element:any) => 
            {
             //sequelize.query(`select tour_id, prod_id from t_programacion where prog_id=${element.prog_id}`)
                        return Programacion.findAll({
                        attributes: ['tour_id','prod_id','prog_id','prog_dura'],
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
         let acondicionamiento = await Promise.all( dataArray.map(async(prod_tour:any)=>{
         //console.log(prod_tour);
            if(prod_tour.prod_id !== 1){
              let productito = await Producto.findAll({
                    where:{
                        prod_id:prod_tour.prod_id
                        
                    },
                    include:[{
                        attributes:['act_id'],
                        model:Prod_Act,
                        include:[{
                            attributes:['act_descrip'],
                            model:Actividad
                        }]
                    }],
                })

                let productito2={
                    contenido:productito[0].dataValues,
                    prog_id:prod_tour.prog_id,
                    prog_dura:prod_tour.prog_dura,
                    
                    tipo:'producto'
                }

                

                ProdTurArr.push( productito2 )
            }else{
                let tourcito = await Tour.findAll({
                    
                    where:{
                        tour_id:prod_tour.tour_id                                                                                                                                                                 
                    },
                    include:[{
                        attributes:['act_id'],
                        model:Tour_Act,
                        include:[{
                            
                            attributes:['act_descrip'],
                            model:Actividad
                        }
                     ]
                    }]
                    
                })

                let tourcito3={
                    contenido:tourcito[0].dataValues,
                    prog_id:prod_tour.prog_id,
                    prog_dura:prod_tour.prog_dura,
                    tipo:'tour'
                }
                
                ProdTurArr.push(tourcito3 )
            }
         })) 

         //ordenado datos
    console.log(ProdTurArr)
         
return ProdTurArr
}