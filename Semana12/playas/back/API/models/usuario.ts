import {Sequelize} from 'sequelize';

var crypto = require('crypto');
var jwt = require('jsonwebtoken');

export var usuario_model = (sequelize:Sequelize,type:any)=>{
    var usuario_model = sequelize.define('t_usuario',{
        usu_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_email:{
            type: type.STRING(50),
            allowNull: true
        },
        usu_hash:{
            type: type.TEXT,
            allowNull: true
        },
        usu_salt:{
            type: type.TEXT,
            allowNull: true
        },
        usu_rol:{
            type: type.STRING(1),
            allowNull: true
        },
        usu_nom:{
            type: type.STRING(100),
            allowNull: true
        },
        usu_ape:{
            type: type.STRING(100),
            allowNull: true
        },
        usu_tel:{
            type: type.STRING(50),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName:'t_usuario'
    }
    );

    //Aqui se declara las funciones de modelo o de clase
    usuario_model.prototype.setSaltAndHash = function(pass:string){
        //console.log(this.usu_nom);
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(pass,this.usu_salt,1000,64,'sha512').toString('hex');
    }

    usuario_model.prototype.generateJWT = function(){
        let payload = {
            usu_id:this.usu_id,
            usu_nom:`${this.usu_nom} ${this.usu_ape}` 
        }
        var token = jwt.sign(payload, 'ysra',{expiresIn:'1h'},{algorithm:'RS256'});
        return token;
    }

    usuario_model.prototype.validPassword = function(password:any){
        //console.log(`aqui esta el salt ${this.usu_salt}`);
        
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if(hash_temporal === this.usu_hash){
            return true;
        }else{
            return false;
        }
    };

    return usuario_model;
}