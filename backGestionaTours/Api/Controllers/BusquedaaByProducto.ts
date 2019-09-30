import { Request ,Response } from "express";
import { Programacion, Producto, Itinerario_Producto, Prod_Act, Actividad, Provincia, Departamento } from "../Config/ConexionSequelize";

export let getProductoById = (req: Request, res: Response) => {
   BusquedaProd(req).then( rpta=>{
    res.json(rpta)
}).catch((err)=>{
    res.status(501).send(err)
})

}

let BusquedaProd = async(req:Request)=>{
    let prog_id = req.params.prog_id;
    let prodID = req.params.prodID;

    let Prodd = await Programacion.findAll({
        attributes:['prog_fechin','prog_fechfin','prog_prec','prog_cap','tour_id'],
        where:{ prog_id:prog_id },
        include:[{
            attributes:['prod_nom','prod_id'],
            model:Producto,
            include:[{
                model:Itinerario_Producto
            },{
                model:Prod_Act,
                include:[{
                    model:Actividad
                }]
            },{
                model:Provincia,
                include:[{
                    model:Departamento
                }]
            }]
        }
    ]


    })

return Prodd
}