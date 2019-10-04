export let usuario_model = (sequelize:any,type:any)=>{
    var Usuario = sequelize.define('t_usuario',{
        usu_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        usu_nom:{
            type:type.STRING(150),
            allowNull:false
        },
        usu_ape:{
            type:type.STRING(150),
            allowNull:false
        },
        usu_email:{
            type:type.STRING(250),
            allowNull:false
        },
        usu_telf:{
            type:type.STRING(25),
            allowNull:false
        },
        usu_dir:{
            type:type.STRING(250),
            allowNull:false
        },
        usu_fnac:{
            type:type.DATE,
            allowNull:false
        },
        usu_hash:{
            type:type.TEXT,
            allowNull:true
        },
        usu_salt:{
            type:type.TEXT,
            allowNull:true
        },
        // usu_tipo:{
        //     type:type.STRING(50),
        //     allowNull:false
        // }
    },{
        tableName:'t_usuario',
        timestamps:false
    });
    return Usuario;
};