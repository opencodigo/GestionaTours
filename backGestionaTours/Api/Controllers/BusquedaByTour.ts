import { Request, Response } from "express";
import { Programacion, Itinerario_Tour, Tour_Act, Tour, Actividad, Tour_producto, Producto, Provincia, Departamento, DescripcionTour } from "../Config/ConexionSequelize";


export let getTourById = (req: Request, res: Response) => {
  
        BusquedaTur(req).then( rpta=>{
            res.json(rpta)
        }).catch((err)=>{
            res.status(501).send(err)
        })
}

let BusquedaTur = async(req:Request)=>{
    let prog_id = req.params.prog_id;
    //let tur_id =  req.params.tourID;

    console.log('parametros');
    console.log(prog_id);
    //console.log(tur_id);
    let Tourr = await  Programacion.findAll({
    
        attributes:['prog_fechin','prog_fechfin','prog_prec','prog_cap','tour_id','prog_dura'],
        where:{ prog_id:prog_id },
        include:[{
            attributes:['tour_nom'],
            model:Tour,
            include:[{
                model:Itinerario_Tour
            },{
                model:Tour_Act, //todo lo vi por postaman falta descriocion del tour(necesitare el id del tur y buscar en la tabla descripciones_tur)
                include:[{
                    model:Actividad
                }]
            },{
                model:Tour_producto,
                include:[{
                    model:Producto,
                    include:[{
                        model:Provincia,
                        include:[{
                            model:Departamento
                        }]
                    }]
                }]
            },{
                attributes:['descripcion'],
                model:DescripcionTour
            }]
           
        }]
      
    })

    return Tourr
}