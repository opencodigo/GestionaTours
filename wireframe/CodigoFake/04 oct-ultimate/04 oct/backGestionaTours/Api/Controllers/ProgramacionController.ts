import {Request , Response} from 'express'
import {  Programacion } from '../Config/ConexionSequelize'

export let RegistrarProgramacion = (req:Request,res:Response)=>{
    console.log('___estamo es registrat____');
    
    let objProgramacion = Programacion.build(req.body) 
    console.log(objProgramacion);
    objProgramacion.save().then((ProgramaCreada:any)=>{
        let rpta = {
            message:'Programa creada correctamente',
            contenido:ProgramaCreada
        }
        res.status(201).send(rpta)
    }).catch((error:any)=>{
        let rpta = {
            message:"Error al crear Factura",
            contenido:error
        };
        res.status(501).send(rpta)
    })
    

}


export let UpdateProgramacion = (req:Request,res:Response)=>{
    Programacion.update({
    
        prog_fechin: req.body.prog_fechin ,
        prog_fechfin: req.body.prog_fechfin ,
        prog_prec: req.body.prog_prec ,
        prog_cap: req.body.prog_cap ,
        prog_dura:req.body.prog_dura ,
        tour_id: req.body.tour_id ,
        prod_id: req.body.prod_id ,
    },{
        where:{
            prog_id:req.body.prog_id
        }
    }).then((ProgramacionAct:any)=>{
      let rpta = {
          message:'Programacion actualiada correctamente',
          contenido:ProgramacionAct
      }
      res.status(201).send(rpta)
  }).catch((error:any)=>{
      let rpta = {
          message:"Error al actualiar Programacion",
          contenido:error
      };
      res.status(501).send(rpta)
  })
      
  
  }



  export let EliminarProgramacion = (req:Request,res:Response)=>{
    let {p_prog_id} = req.params;
    Programacion.destroy({
        where:{
            prog_id:p_prog_id
        }
    }).then((ProgramacionElm:any)=>{
        let rpta = {
            message:'Programacion eliminada correctamente',
            contenido:ProgramacionElm
        }
        res.status(201).send(rpta)
    }).catch((error:any)=>{
        let rpta = {
            message:"Error al eliminar Programacion",
            contenido:error
        };
        res.status(501).send(rpta)
    })
        
}