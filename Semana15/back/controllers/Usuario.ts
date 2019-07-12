//usuario controllers
import {Request,Response} from 'express';
import {Usuario} from '../config/mongoose';

export var usuario_controller = {
    getAll:(req:Request,res:Response)=>{
       Usuario.find((error:any,response:any) => {
           if (error){
               res.status(500).json({
                   error:"Error en el Servidor"
               })
           }else{
               res.status(200).json({
                   message:"ok",
                   content:response
               })
           }
       })
    },

    create:(req:Request,res:Response)=>{
        let objUsuario = new Usuario(req.body);
        objUsuario.save((error:any,usuarioCreado:any)=>{
            if (error){
                res.status(500).json({
                    error:"Error al crear el Usuario."
                })
            }else{
                res.status(200).json({
                    message:"Usuario Creado.",
                    content:usuarioCreado
                })
            }
        })
    },

    update:(req:Request,res:Response)=>{
        let objUsuario = new Usuario(req.body);
        Usuario.findByIdAndUpdate(objUsuario._id, objUsuario,{new:true},(error:any, usuarioActualizado:any)=>{
            if (error){
                        res.status(500).json({
                            error:"Error al actualizar el Usuario."
                        })
                    }else{
                        res.status(200).json({
                            message:"Usuario Actualizado.",
                            content:usuarioActualizado
                        })
                    }
        })

    }
   
}
