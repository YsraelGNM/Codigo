import {Sequelize} from 'sequelize';


export var venta_model = (sequelize:Sequelize,type:any)=>{
    var venta_model = sequelize.define('ventas',{
        idventa:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        monto:{
            type: type.DECIMAL,
            allowNull: true
        },
        fecha:{
            type: type.DATE,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName:'ventas'
    }
    );

    //Aqui se declara las funciones de modelo o de clase
    return venta_model;
}