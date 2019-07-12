//video controllers
import {Request,Response} from 'express';
import {Video} from '../config/mongoose';
var fs = require('fs');
var path_module = require('path')
const jsreport = require('jsreport');

export var video_controller = {
    getAll:(req:Request,res:Response)=>{
       Video.find((error:any,response:any) => {
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

    getById:(req:Request,res:Response)=>{
        let {id} = req.params;
        Video.findById(id,(error:any,response:any) => {
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
        let objVideo = new Video(req.body);
        objVideo.save((error:any,usuarioCreado:any)=>{
            if (error){
                res.status(500).json({
                    error:"Error al crear el Video."
                })
            }else{
                res.status(200).json({
                    message:"Video Creado.",
                    content:usuarioCreado
                })
            }
        })
    },

    update:(req:Request,res:Response)=>{
        let objVideo = new Video(req.body);
        Video.findByIdAndUpdate(objVideo._id,objVideo,{new:true},(error:any, usuarioActualizado:any)=>{
            if (error){
                        res.status(500).json({
                            error:"Error al actualizar el Video."
                        })
                    }else{
                        res.status(200).json({
                            message:"Video Actualizado.",
                            content:usuarioActualizado
                        })
                    }
        })

    },

    delete:(req:Request,res:Response)=>{
        Video.findByIdAndDelete(req.params.id,(error:any, videoBorrado:any)=>{
            if (error){
                        res.status(500).json({
                            error:error
                        })
                    }else{
                        fs.unlink(`imagenes/${videoBorrado.vid_img}`,(err:any)=>{
                            if(!err){
                                res.status(200).json({
                                    message:"Video Borrado.",
                                    content:videoBorrado._id
                                })
                            } else {
                                res.status(500).json({
                                    error:err
                                })
                            }
                        });
                        res.status(200).json({
                            message:"Video Borrado.",
                            content:videoBorrado._id
                        })
                    }
        })

    },

    upLoadImage:(req:Request,res:Response)=>{
        let {id} = req.params;
        let nombreYExtension = req.files.archivo.path.split('\\')[1];
       if (req.files){
            Video.findByIdAndUpdate(id,{vid_img:nombreYExtension},{new:true},(error:any, usuarioActualizado:any)=>{
                if (error){
                            res.status(500).json({
                                error:error
                            })
                }else{
                            res.status(200).json({
                                message:"Imagen Actualizada.",
                                content:usuarioActualizado
                            })
                }
            })
       }else
       {
        res.status(500).json({
            error:"Error al subir el Video."
        })
       }

    },

    getImagenByName:(req:Request,res:Response)=>{
        let ruta = `imagenes/${req.params.name}`;
        let rutaDefault = 'imagenes/default.png';
        if (fs.existsSync(ruta)){
            return res.sendFile(path_module.resolve(ruta));
        } else {
            return res.sendFile(path_module.resolve(rutaDefault));
        }
     },

     getReporte:(req:Request,res:Response)=>{
        jsreport.render({
            template:{
                content:"<h1>Hello world {{this.titulo}}</h1>",
                engine: 'handlebars',
                recipe: 'chrome-pdf'
            },
            data:{titulo:'Titulo grande'}
        }).then((salida:any)=>{
            salida.stream.pipe(res);
        }).catch((e:any)=>{
            res.end(e.message)
        })
     }
   
}
