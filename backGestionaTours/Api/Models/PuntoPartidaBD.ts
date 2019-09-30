export let puntoPartida_model =  (sequelize:any,type:any)=>{
    var PuntoPartida = sequelize.define('t_puntoPartida',{
        puntoPart_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
       


    },{
        tableName:'t_puntoPartida',
        timestamps:false
    });
    return PuntoPartida;
    
}  