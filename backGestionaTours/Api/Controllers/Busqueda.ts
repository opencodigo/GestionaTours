import { Request, Response } from "express";
import { sequelize } from './../Config/ConexionSequelize'


export let getBusqueda = (req: Request, res: Response)=>{

    Busqueda(req).then( rpta=>{
        res.send(rpta)
    })
   }

 let Busqueda = async(req: Request, ) => {
    console.log(req.body.prog_fechin)
    let busqueda_front = await sequelize.query(`select prog_id from t_programacion join t_tour_producto on t_programacion.tour_id = t_tour_producto.tour_id
    join t_producto on t_tour_producto.prod_id = t_producto.prod_id
where prov_id=${req.body.provID} and prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	
union
select prog_id from t_programacion join t_producto on t_programacion.prod_id = t_producto.prod_id where prov_id = ${req.body.provID}	group by prog_id and 
prog_fechin >='${req.body.fechin}' and prog_fechfin <= '${req.body.fechfin}' 	`)








return busqueda_front[0]

}