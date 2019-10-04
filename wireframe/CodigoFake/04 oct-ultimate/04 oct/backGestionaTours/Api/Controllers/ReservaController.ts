import {Request , Response} from 'express'
import {  Programacion, Reserva } from '../Config/ConexionSequelize'

export let RegistrarReserva = (req:Request,res:Response)=>{

    
    let objReserva = Reserva.build(req.body) 
    console.log(objReserva);
    objReserva.save().then((ReservaCreada:any)=>{
        let rpta = {
            message:'Reserva creada correctamente',
            contenido:ReservaCreada
        }
        res.status(201).send(rpta)
    }).catch((error:any)=>{
        let rpta = {
            message:"Error al crear Reserva",
            contenido:error
        };
        res.status(501).send(rpta)
    })
    

}


export let UpdateReserva = (req:Request,res:Response)=>{
    Reserva.update({
        res_estado:req.body.res_estado,
	res_prec:req.body.res_prec,
	res_fech:req.body.res_fech,
	usu_id:req.body.usu_id,
	fact_id:req.body.fact_id,
	prog_id:req.body.prog_id
    
   
    },{
        where:{
            res_id:req.body.res_id
        }
    }).then((ReservaAct:any)=>{
      let rpta = {
          message:'Reserva actualiada correctamente',
          contenido:ReservaAct
      }
      res.status(201).send(rpta)
  }).catch((error:any)=>{
      let rpta = {
          message:"Error al actualiar Reserva",
          contenido:error
      };
      res.status(501).send(rpta)
  })
      
  
  }



  export let EliminarReserva = (req:Request,res:Response)=>{
    let {p_res_id} = req.params;
    Reserva.destroy({
        where:{
            res_id:p_res_id
        }
    }).then((ReservaElm:any)=>{
        let rpta = {
            message:'Reserva eliminada correctamente',
            contenido:ReservaElm
        }
        res.status(201).send(rpta)
    }).catch((error:any)=>{
        let rpta = {
            message:"Error al eliminar Reserva",
            contenido:error
        };
        res.status(501).send(rpta)
    })
        
}