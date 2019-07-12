import {Sequelize} from 'sequelize';


export var tienda_model = (sequelize:Sequelize,type:any)=>{
    var tienda_model = sequelize.define('tiendas',{
        idtienda:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descripcion:{
            type: type.STRING(45),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName:'tiendas'
    }
    );

    //Aqui se declara las funciones de modelo o de clase
    return tienda_model;
}