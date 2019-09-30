import { Request, Response } from "express";
import { Tour } from "../Config/ConexionSequelize";

export let getTourById = (req: Request, res: Response) => {
  
        BusquedaTur(req).then( rpta=>{
            res.json(rpta)
        }).catch((err)=>{
            res.status(501).send(err)
        })
}

let BusquedaTur = async(req:Request)=>{
    console.log(req.params.tourID)
    let Tourr = await  Tour.findAll({
        where:{ tour_id:req.params.tourID }
    })

    return Tourr
}