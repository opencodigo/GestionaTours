export let descripcion_model =  (sequelize:any,type:any)=>{
    
    var Descripcion = sequelize.define('t_descripcion_producto',{
        desc_prod_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        descripcion:{
            type:type.TEXT,
            allowNull:false
        },
    },{
        tableName:'t_descripcion_producto',
        timestamps:false
    });
    return Descripcion;

}  

}  

}  

}  

