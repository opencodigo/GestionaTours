export let Prod_Act_model = (sequelize:any,type:any)=>{
    let Producto_Actividad = sequelize.define('t_producto_actividad',{
        prod_act_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    }
    ,{
        tableName:'t_producto_actividad',
        timestamps:false
    });

    return Producto_Actividad
}
