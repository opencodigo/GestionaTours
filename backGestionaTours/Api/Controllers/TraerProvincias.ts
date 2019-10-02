import { Request, Response } from "express";
import {Provincia, Tour } from "../Config/ConexionSequelize";

export let getOnlyProvincia = (req: Request, res: Response) => {
 
    buscandoProvincias(req).then((rpta)=>{
        res.status(200).send(rpta)
    })

}

let buscandoProvincias = async(req: Request)=>{

    let prov = Provincia.findAll({
        attributes:['prov_id','prov_nom']
    })
    return prov


}