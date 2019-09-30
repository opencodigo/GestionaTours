export let pais_model = (sequelize:any,type:any)=>{
    let Pais = sequelize.define('t_pais',{
        pais_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        pais_nom:{
            type:type.STRING(150),
            allowNull:false
        }
    },{
        tableName:'t_pais',
        timestamps:false
    });
    return Pais;
};