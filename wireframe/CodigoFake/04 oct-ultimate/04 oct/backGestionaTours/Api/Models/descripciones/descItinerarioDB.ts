export let descItinerario_model =  (sequelize:any,type:any)=>{
    var DescItinerario = sequelize.define('t_descItinerario_',{
        descItinerario_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        
        descItinerario_detalle:{
            type:type.TEXT,
            allowNull:false
        }
        
    },{
        tableName:'t_descItinerario',
        timestamps:false
    });
    return DescItinerario;
    
} 