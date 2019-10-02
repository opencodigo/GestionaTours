export let programacion_model = (sequelize:any,type:any)=>{
    let Programacion = sequelize.define('t_programacion',{
        prog_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        prog_fechin:{
            type:type.DATE,
            allowNull:false
        },
        prog_fechfin:{
            type:type.DATE,
            allowNull:false
        },
        prog_prec:{
            type:type.DECIMAL(10,2),
            allowNull:true
        },
        prog_cap:{
            type:type.INTEGER,
            allowNull:false
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        },
        prog_dura:{
            type:type.STRING(20),
            allowNull:false
=======
>>>>>>> master
>>>>>>> Stashed changes
        }
    },{
        tableName:'t_programacion',
        timestamps:false
    });
    return Programacion;
};