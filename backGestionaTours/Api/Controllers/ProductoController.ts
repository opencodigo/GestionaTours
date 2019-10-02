import {Request , Response} from 'express';
import {Producto,Descripcion,Itinerario_Producto,Imagen,Producto_Imagen} from './../Config/ConexionSequelize';

const sqlz = require('sequelize');
const query = sqlz.Op;
/* Exportamos Multer para subir Archivos o ficheros: */
var multer = require('multer');

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
export let AgregarItinirario = (req:Request,res:Response)=>{
    let {p_prod_id} = req.params;
    let objItinerario = Itinerario_Producto.build({
        iti_prod_desc:req.body.iti_prod_desc,
        prod_id:p_prod_id
    });
    objItinerario.save().then((AddItinirario:any)=>{
        let rpta = {
            message:'Itinerario Agregado Correctamente',
            contenido:AddItinirario
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Itinerario No Agregado',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let ActualizarItinerario = (req:Request,res:Response)=>{
    let {p_iti_prod_id} = req.params;
    Itinerario_Producto.update({
        iti_prod_desc:req.body.iti_prod_desc
    },{
        where:{
            iti_prod_id:p_iti_prod_id
        }
    }).then((UpdateItinerario:any)=>{
        let rpta = {
            message:'Itinerario Actualizado Correctamente',
            contenido:UpdateItinerario
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Itinerario No Actualizado',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let EliminarItinerario = (req:Request,res:Response)=>{
    let {p_iti_prod_id} = req.params;
    Itinerario_Producto.destroy({
        where:{
            iti_prod_id:p_iti_prod_id
        }
    }).then((DeleteItinerario:any)=>{
        let rpta = {
            message:'Eliminado Satisfactoriamente',
            contenido:DeleteItinerario
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
export let SubirImagenProducto = (req:any,res:Response)=>{
    var DIR = './Api/ImgProducto';
    var storage = multer.diskStorage({
        destination(req:Request,file:any,cb:any){
            cb(null,DIR);
        },
        filename(req:Request,file:any,cb:any){
            cb(null,file.originalname);
        }
    });
    var upload = multer({
        dest:DIR,
        storage:storage
    }).single('imgprod');
    upload(req,res,function(error:any){
        if(error)
        {
            console.log(error);
            return res.status(422).send('Error Al Subir Tu Imagen');
        }
        else{
            var imgupload = req.file.filename;
            console.log("Imagen Subida"+imgupload);
            let objImagenProducto = Imagen.build({img_url:imgupload});
            console.log(objImagenProducto);
            objImagenProducto.save().then((saveImage:any)=>{
                let rpta = {
                    message:"Creado Correctamente",
                    img:imgupload,
                    contenido:saveImage
                }
                res.status(201).json(rpta);
            }).catch((error:any)=>{
                let rpta = {
                    message:"Error Al Creado",
                    contenido:error
                }
                res.status(501).json(rpta);
            });
        }
    });
};
export let ActualizarImagen = ()=>{
    /** Pendiente */
};
export let AddImageForProducto = (req:Request,res:Response)=>{
    let {p_prod_id} = req.params;
    let {p_img_id} = req.params;
    let objProducto_Imagen = Producto_Imagen.build({
        prod_id:p_prod_id,
        img_id:p_img_id
    });
    objProducto_Imagen.save().then((saveProd_Img:any)=>{
        let rpta = {
            message:'Imagen Relacionado Correctamente',
            contenido:saveProd_Img
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Imagen No Relacionada',
            contenido:error
        }
        res.status(501).json(rpta);
    });
    console.log(objProducto_Imagen);
};
export let UpdateImageForProducto = (req:Request,res:Response)=>{
    /** Pendiente */
};