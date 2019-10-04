export let descripcion_tour_model =  (sequelize:any,type:any)=>{
    
    var Descripcion_Tour = sequelize.define('t_descripcion_tour',{
        desc_tour_id:{
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
        tableName:'t_descripcion_tour',
        timestamps:false
    });
    return Descripcion_Tour;
}  