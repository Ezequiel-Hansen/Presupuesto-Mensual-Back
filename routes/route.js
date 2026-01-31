import { Router } from "express";
import { getAll, create, update ,deleted,setdate,mount} from "../controllers/presupuestoControllers.js";

const routes=Router()

routes
    .get('/all',getAll)
    .get('/mount',mount)
    .post('/setdate',setdate)
    .post('/create',create)
    .patch('/update/:id_item',update)
    .delete('/deleted/:id_item',deleted)

export default routes