import { Request, Response } from "express";
<<<<<<< Updated upstream
import { sequelize } from './../Config/ConexionSequelize'
=======
<<<<<<< HEAD
import { sequelize, Producto, Tour, Tour_Act, Prod_Act, Actividad, Programacion } from './../Config/ConexionSequelize'
=======
import { sequelize } from './../Config/ConexionSequelize'
>>>>>>> master
>>>>>>> Stashed changes


export let getBusqueda = (req: Request, res: Response)=>{

    Busqueda(req).then( rpta=>{
<<<<<<< Updated upstream
        res.send(rpta)
=======
<<<<<<< HEAD
        res.json(rpta)
>>>>>>> Stashed changes
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








<<<<<<< Updated upstream
return busqueda_front[0]

=======
         //ordenado datos
    console.log(ProdTurArr)
         
return ProdTurArr
=======
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

>>>>>>> master
>>>>>>> Stashed changes
}