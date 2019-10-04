
export let Tour_Producto_model = (sequelize:any,type:any)=>{
    let Tour_Producto = sequelize.define('t_tour_producto',{
        tour_prod_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    },{
        tableName:'t_tour_producto',
        timestamps:false
    });
    return Tour_Producto;
};