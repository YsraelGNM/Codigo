// registro router
import { registro_controller } from "../controllers/registro";
import { Router } from "express";

export var registro_router = Router();

registro_router.get('/registro/slot/:slotId/getall',registro_controller.getAllRegistrosBySlotId)
registro_router.get('/registro/slot/:slotId/:date/getall',registro_controller.getAllRegistrosBySlotIdbyDate)
