//auth controllers
import {Request,Response} from 'express';
import { Usuario } from '../config/sequelize';


var Sequelize = require('sequelize');

export var auth_controller = {
    register:(req:Request,res:Response)=>{
        Usuario.findAll({
            where:{usu_email:req.body.usu_email}
        }).then((usuarios:any)=>{
            if(usuarios.length === 0){
                let objUsuario = Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then((usu)=>{
                    let token = objUsuario.generateJWT();
                    if (usu && token){
                        let response = {
                            message:'Created'
                            ,token:token
                        }
                        res.status(201).json(response);
                    }else{
                        let response = {
                            message:'error'
                            ,content:'Error al crear el usuario y/o token'
                        }
                        res.status(500).json(response);
                    }
                    
                });
            }else{
                let response = {
                    message:'error'
                    ,content:`El usuario con email ${req.body.usu_email} ya existe.`
                }
                res.status(500).json(response);
            }
        })
    },

    login: (req: Request, res: Response) => {
        let {usu_email,usu_pass} = req.body;
        // findOne => 
        Usuario.findOne({
            where:{
                usu_email:usu_email
            }
        }).then((objUsuario:any)=>{
            if(objUsuario){
                /// el usuario existe => validar la contra
                let valid = objUsuario.validPassword(usu_pass);
                if(valid){
                    /// contrasenia correcta
                    let token = objUsuario.generateJWT();
                    let response = {
                        message:'ok',
                        token:token
                    };
                    res.status(200).json(response);
                }else{
                    /// contrasenia incorrecta
                    let response = {
                        message: 'error',
                        content: 'Usuario o password incorrecto'
                    };
                    res.status(500).json(response);
                }
            }else{
                /// si es null
                let response = {
                    message: 'error',
                    content: 'Usuario o password incorrecto'
                };
                res.status(500).json(response);
            }
        })
    }   

   
}
