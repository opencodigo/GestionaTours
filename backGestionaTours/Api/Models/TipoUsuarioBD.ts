export let tipoUsuario_model = (sequelize:any,type:any)=>{
    var TipoUsuario = sequelize.define('t_tipoUsuario',{
        tipoUsur_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        tipoUsur_detalle:{
            type:type.TEXT,
            allow:true // cpuede o no comentar

        }
  
    },{
        tableName:'t_tipoUsuario',
        timestamps:false

    });
    return TipoUsuario;
}