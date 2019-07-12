// playa router
import { venta_controller } from "../controllers/venta";
import { Router } from "express";
import { wachiman } from '../utils/utils';

export var venta_router = Router();



venta_router.get('/venta/getAllVentas',venta_controller.getAllVentas);
venta_router.post('/venta/create',venta_controller.create);
venta_router.get('/venta/:idventa/getById',venta_controller.getById);
venta_router.post('/venta/:idventa/upDate',venta_controller.upDate);
venta_router.post('/venta/:idventa/Eliminar',venta_controller.Eliminar);
venta_router.get('/venta/getAllVentasConsolidado',venta_controller.getAllVentasConsolidado);

