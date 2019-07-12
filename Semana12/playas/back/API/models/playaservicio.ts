import {Sequelize} from 'sequelize';


export var playaserv_model = (sequelize:Sequelize,type:any)=>{
    var playaserv_model = sequelize.define('t_playaservicio',{
        playaserv_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        playaserv_cost:{
            type: type.DECIMAL(10, 2),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName:'t_playaservicio'
    }
    );

    //Aqui se declara las funciones de modelo o de clase
    return playaserv_model;
}