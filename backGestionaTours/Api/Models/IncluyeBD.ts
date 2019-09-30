export let incluye_model =  (sequelize:any,type:any)=>{
    var Incluye = sequelize.define('t_incluye',{
        incluye_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
        
    },{
        tableName:'t_incluye',
        timestamps:false
    });
    return Incluye;
    
} 