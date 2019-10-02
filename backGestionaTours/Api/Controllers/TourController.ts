import { Request, Response } from "express";
import {Tour,DescripcionTour,Itinerario_Tour,Tour_producto} from '../Config/ConexionSequelize';
const sqlz = require('sequelize');
const query = sqlz.Op;
/* Exportamos Multer para subir Archivos o ficheros: */
var multer = require('multer');


export let RegistrarTour  = (req:any,res:Response) =>{
    //var DIR = './Api/ImgTour';
    var DIR = '../gestionatours/src/assets/ImgTour';
    var storage = multer.diskStorage({
        destination(req:Request,file:any,cb:any){
            cb(null,DIR);
        },
        filename(req:Request,file:any,cb:any){
            cb(null,Date.now()+'-' +file.originalname);
        }
    });
    var upload = multer({
        dest:DIR,
        storage:storage
    }).single('imgTour');
    upload(req,res,function(error:any){
        if(error)
        {
            console.log(error);
            return res.status(422).send('Error Al Subir Tu Imagen');
        }
        else{
            var imgupload = req.file.filename;
            console.log("Imagen Subida"+imgupload);
            let objTour = Tour.build({
                tour_nom:req.body.tour_nom,
                tour_prec:req.body.tour_prec,
                tour_img: imgupload
            });
            objTour.save().then((saveTour:any)=>{
                let rpta = {
                    message:'Regitrado Correctamente',
                    img:imgupload,
                    contenido:saveTour
                }
                res.status(201).json(rpta);
            }).catch((error:any)=>{
                let rpta = {
                    message:'Error No Registrado',
                    contenido:error
                }
                res.status(501).json(rpta);
            })
            console.log(objTour);
        }
    });
};
export let ActualizarTour = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    Tour.update({
        tour_nom:req.body.tour_nom,
        tour_prec:req.body.tour_prec
    },{
        where:{
            tour_id:p_tour_id
        }
    }).then((TourUpdate:any)=>{
        let rpta = {
            message:'Tour Actualizado Correctamente',
            contenido:TourUpdate
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Tour No Actualizado',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let EliminarTour = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    Tour.destroy({
        where:{
            tour_id:p_tour_id
        }
    }).then((DeleteTour:any)=>{
        let rpta = {
            message:'Eliminado Correctamente',
            contenido:DeleteTour
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Tour No Eliminado',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let AddDescripcionTour = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    let objDescripcionTour = DescripcionTour.build({
        descripcion:req.body.descripcion,
        tour_id:p_tour_id
    });
    objDescripcionTour.save().then((AddDescrip:any)=>{
        let rpta = {
            message:'Descripcion Agregada',
            contenido:AddDescrip
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Descripcion No Agregada',
            contenido:error
        }
        res.status(501).json(rpta);
    });
    console.log(objDescripcionTour);

};
export let UpdateDescripcionTour = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    DescripcionTour.update({
        descripcion:req.body.descripcion
    },{
        where:{
            tour_id:p_tour_id
        }
    }).then((UpdateDescrip:any)=>{
        let rpta = {
            message:'Descripcion Actualizada',
            contenido:UpdateDescrip
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Actualizar Descripcion',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let DeleteDescripcionTour = (req:Request,res:Response)=>{
    let {p_desc_tour_id} = req.params;
    DescripcionTour.destroy({
        where:{
            desc_tour_id:p_desc_tour_id
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
export let AddItinerarioTour = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    let objItinerarioTour = Itinerario_Tour.build({
        iti_tour_desc:req.body.iti_tour_desc,
        tour_id:p_tour_id
    });
    objItinerarioTour.save().then((AddItinerario:any)=>{
        let rpta = {
            message:'Itinerario Agregado Correctamente',
            contenido:AddItinerario
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Agregar Itinerario',
            contenido:error
        }
        res.status(501).json(rpta);
    });
    console.log(objItinerarioTour);
};
export let UpdateItinerarioTour = (req:Request,res:Response)=>{
    let {p_iti_tour_id} = req.params;
    Itinerario_Tour.update({
        iti_tour_desc:req.body.iti_tour_desc
    },{
        where:{
            iti_tour_id:p_iti_tour_id
        }
    }).then((UpdateItiTour:any)=>{
        let rpta = {
            message:'Actualizado Itinerario',
            contenido:UpdateItiTour
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Al Actualizar Itinerario',
            contenido:error
        }
        res.status(501).json(rpta);
    });
};
export let DeleteItinerarioTour = (req:Request,res:Response)=>{
    let {p_iti_tour_id} = req.params;
    Itinerario_Tour.destroy({
        where:{
            iti_tour_id:p_iti_tour_id
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
export let TourAddProducto = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    let {p_prod_id} = req.params;
    let objTourProducto = Tour_producto.build({
        tour_id:p_tour_id,
        prod_id:p_prod_id
    });
    objTourProducto.save().then((saveTourProd:any)=>{
        let rpta = {
            message:'Producto Agregado A Tour Correctamente',
            contenido:saveTourProd
        }
        res.status(201).json(rpta);
    }).catch((error:any)=>{
        let rpta = {
            message:'Error Producto No Agregado a Tour',
            contenido:error
        }
        res.status(501).json(rpta);
    });
    console.log(objTourProducto);
};
export let TourUpdateProducto = (req:Request,res:Response)=>{
    let {p_tour_id} = req.params;
    /* Pendiente WA pensar como Solucionar esto :'c */
};

/* AQUI MOSTRAREMOS LOS FILTRO DE LA BASE DE DATOS */

export let ListadoTourForCity = (req:Request,res:Response)=>{
    Tour.findAll({
        where:{
            tour_id:{
                [query.lte]:4
            }
        }
    }).then((rpta: any) => {
        res.json(rpta);
    }).catch((eeror:any)=>{
        res.json(eeror);
    });
};