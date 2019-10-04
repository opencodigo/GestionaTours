export let producto_imagen_model = (sequelize:any,type:any)=>{
    let Producto_Imagen = sequelize.define('t_producto_imagen',{
        prod_img_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    },{
        tableName:'t_producto_imagen',
        timestamps:false
    });
    return Producto_Imagen;
};