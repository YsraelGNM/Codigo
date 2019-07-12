// usuario router
import { usuario_controller } from "../controllers/usuario";
import { Router } from "express";

export var usuario_router = Router();

usuario_router.get('/usuario',usuario_controller.getAll);
usuario_router.post('/usuario/create',usuario_controller.create);
usuario_router.put('/usuario/update',usuario_controller.update);

