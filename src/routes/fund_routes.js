import express from "express";
const routes = express.Router();

import {
   fundCreat,fundControl,fundshow 
} from "../controllers/fund_controller.js"

routes.post('/fund_create', fundCreat)

routes.put('/fund_custimize', fundControl)
routes.get('/fund', fundshow)



export default routes