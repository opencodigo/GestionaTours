export let factura_model = (sequelize:any,type:any)=>{
    var Factura = sequelize.define('t_factura',{
        fact_id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        fact_fech:{
            type:type.DATE,
            allowNull:false
        },
        fact_nom:{
            type:type.STRING(150),
            allowNull:false
        },
        fact_ape:{
            type:type.STRING(150),
            allowNull:false
        },
        fact_ruc:{
            type:type.STRING(25),
            allowNull:false
        },
        fact_dir:{
            type:type.STRING(150),
            allowNull:false
        },
        fact_num:{ //numero del documento
            type:type.STRING(25),
            allowNull:false
        },
        fact_num_ope:{ //generar una factura,veces de q se genera de factura 
            type:type.STRING(50),
            allowNull:false
        },
        fact_tipo_pago:{
            type:type.STRING(50),
            allowNull:false
        }

    },{
        tableName:'t_factura',
        timestamps:false

    });
    return Factura

}