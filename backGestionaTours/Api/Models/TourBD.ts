export let tour_model = (sequelize:any,type:any)=>{

    let Tour = sequelize.define('t_tour',{
        tour_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        tour_nom:{
            type:type.STRING(150),
            allowNull:false
        },
     
        tour_prec:{
            type:type.DECIMAL(10,2),
            allowNull:false
        },
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
        tour_img:{
            type:type.STRING(250),
            allowNull:false
        }
<<<<<<< Updated upstream
=======
>>>>>>> master
>>>>>>> Stashed changes
    },{
        tableName:'t_tour',
        timestamps:false
    });
    return Tour;
<<<<<<< Updated upstream
};
=======
<<<<<<< HEAD
};
=======
};
>>>>>>> master
>>>>>>> Stashed changes
