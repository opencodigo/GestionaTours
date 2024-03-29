export let reserva_model = (sequelize:any,type:any)=>{

    var Feedback = sequelize.define('t_feedback',{
        feed_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        feed_com:{
            type:type.TEXT,
            allow:true // cpuede o no comentar
        },
        feed_val:{
            type:type.INTEGER,
            allowNull:true
        }
        
    },{
        tableName:'t_feedback',
        timestamps:false

    });
    return Feedback
}