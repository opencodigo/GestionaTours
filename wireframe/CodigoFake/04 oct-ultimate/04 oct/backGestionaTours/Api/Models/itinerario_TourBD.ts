export let itinerario_tour_model = (sequelize:any,type:any)=>{
    var Itinerario_Tour = sequelize.define('t_itinerario_tour',{
        iti_tour_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        
        },
        iti_tour_desc:{
            type:type.TEXT,
            allowNull:false
        }

    },{
        tableName:'t_itinerario_tour',
        timestamps:false

    });
    return Itinerario_Tour
}