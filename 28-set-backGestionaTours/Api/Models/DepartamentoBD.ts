export let departamento_model = (sequelize:any,type:any) =>{
    let Departamento = sequelize.define('t_departamento',{
        dep_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        dep_nom:{
            type:type.STRING(150),
            allowNull:false
        }
    },{
        tableName:'t_departamento',
        timestamps:false
    });
    return Departamento;
};