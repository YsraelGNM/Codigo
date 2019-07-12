// tienda router
import { tienda_controller } from "../controllers/tienda";
import { Router } from "express";
import { wachiman } from '../utils/utils';

export var tienda_router = Router();

tienda_router.get('/tienda/getAllTiendas',tienda_controller.getAllTiendas);
