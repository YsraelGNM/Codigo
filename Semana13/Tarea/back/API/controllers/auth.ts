//auth controllers
import {Request,Response} from 'express';
import { Usuario } from '../config/sequelize';


var Sequelize = require('sequelize');

export var auth_controller = {
    register:(req:Request,res:Response)=>{
        Usuario.findAll({
            where:{email:req.body.email}
        }).then((usuarios:any)=>{
            if(usuarios.length === 0){
                let objUsuario = Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.password);
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
                    ,content:`El usuario con email ${req.body.email} ya existe.`
                }
                res.status(500).json(response);
            }
        })
    },

    login: (req: Request, res: Response) => {
        let {email,password} = req.body;
        // findOne => 
        Usuario.findOne({
            where:{
                email:email
            }
        }).then((objUsuario:any)=>{
            if(objUsuario){
                /// el usuario existe => validar la contra
                let valid = objUsuario.validPassword(password);
                if(valid){
                    /// contrasenia correcta
                    let token = objUsuario.generateJWT();
                    let response = {
                        message: 'ok',
                        token: token,
                        email: objUsuario.email
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
    },  

    email: (req: Request, res: Response) => {
        let {email} = req.body;
        // findOne => 
        Usuario.findOne({
            where:{
                email:email
            }
        }).then((objUsuario:any)=>{
            if(objUsuario){
                /// el usuario existe => retornar usuario
                let response = {
                    message:'ok',
                    content:objUsuario
                };
                res.status(200).json(response);
            }else{
                /// si es null
                let response = {
                    message: 'error',
                    content: 'Usuario no existe'
                };
                res.status(200).json(response);
            }
        })
    }   
   
}
