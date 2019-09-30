import {Request , Response} from 'express';
import {Producto,Descripcion} from './../Config/ConexionSequelize';

const sqlz = require('sequelize');
const query = sqlz.Op;

export let RegistrarProducto = (req:Request,res:Response)=>{
    let objProducto = Producto.build(req.body);
    console.log(objProducto);
    objProducto.save().then((ProductoCreado:any)=>{
        let rpta = {
            message:"Creado Correctamente",
            contenido:ProductoCreado
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:"Error Al Creado",
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let ActualizarProducto = (req:Request,res:Response)=>{
    let {p_prod_id} = req.params;
    Producto.update({
        prod_nom:req.body.prod_nom,
        prod_prec:req.body.prod_prec,
        prov_id:req.body.prov_id
    },{
        where:{
            prod_id:p_prod_id
        }
    }).then((ProductUpdate:any)=>{
        let rpta = {
            message:'Producto Actualizado Correctamente',
            contenido:ProductUpdate
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Actualizar',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let EliminarProducto = (req:Request,res:Response)=>{
    let {p_prod_id} = req.params;
    Producto.destroy({
        where:{
            prod_id:p_prod_id
        }
    }).then((DeleteProduct:any)=>{
        let rpta = {
            message:'Eliminado Satisfactoriamente',
            contenido:DeleteProduct
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Eliminar',
            contenido: error
        }
        res.status(501).json(rpta);
    })
};
export let AgregarDescripcion = (req:Request,res:Response)=>{
    let {p_prod_id} = req.params;
    let objDescripcion = Descripcion.build({descripcion:req.body.descripcion,prod_id:p_prod_id});
    /*objDescripcion = {
        descripcion:req.body.descripcion,
        prod_id:p_prod_id
    }*/
    console.log(objDescripcion);
    objDescripcion.save().then((DescripcionSave:any)=>{
        let rpta = {
            message:'Descripcion Agregada Satisfactoriamente',
            contenido:DescripcionSave
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Descripcion No Agregada, ¡Jodete!',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let ActualizarDescripcion = (req:Request,res:Response)=>{
    let {p_desc_prod_id} = req.params;
    Descripcion.update({
        descripcion:req.body.descripcion
    },{
        where:{
            desc_prod_id:p_desc_prod_id
        }
    }).then((UpdateDesc:any)=>{
        let rpta = {
            message:'Descripcion Actualizada',
            contenido:UpdateDesc
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Actulizar',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let EliminarDescripcion = (req:Request,res:Response)=>{
    let {p_desc_prod_id} = req.params;
    Descripcion.destroy({
        where:{
            desc_prod_id:p_desc_prod_id
        }
    }).then((DeleteDesc:any)=>{
        let rpta = {
            message:'Eliminado Satisfactoriamente',
            contenido:DeleteDesc
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Eliminar',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};