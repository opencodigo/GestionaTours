import {Request , Response} from 'express'
import { Factura } from '../Config/ConexionSequelize'

export let RegistrarFactura = (req:Request,res:Response)=>{
    console.log('___estamo es registrat____');
    
    let objFactura = Factura.build(req.body) 
    console.log(objFactura);
    objFactura.save().then((FacturaCreada:any)=>{
        let rpta = {
            message:'Factura creada correctamente',
            contenido:FacturaCreada
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

export let UpdateFactura = (req:Request,res:Response)=>{
  Factura.update({
      fact_fech:req.body.fact_fech,
      fact_nom:req.body.fact_nom,
      fact_ape:req.body.fact_ape,
      fact_ruc:req.body.fact_ruc,
      fact_dir:req.body.fact_dir,
      fact_tipo_pago:req.body.fact_tipo_pago
  },{
      where:{
          fact_id:req.body.fact_id
      }
  }).then((FacturaAct:any)=>{
    let rpta = {
        message:'Factura actualiada correctamente',
        contenido:FacturaAct
    }
    res.status(201).send(rpta)
}).catch((error:any)=>{
    let rpta = {
        message:"Error al actualiar Factura",
        contenido:error
    };
    res.status(501).send(rpta)
})
    

}

export let EliminarFactura = (req:Request,res:Response)=>{
    let {p_fact_id} = req.params;
    Factura.destroy({
        where:{
            fact_id:p_fact_id
        }
    }).then((FacturaElm:any)=>{
        let rpta = {
            message:'Factura eliminada correctamente',
            contenido:FacturaElm
        }
        res.status(201).send(rpta)
    }).catch((error:any)=>{
        let rpta = {
            message:"Error al eliminada Factura",
            contenido:error
        };
        res.status(501).send(rpta)
    })
        
}