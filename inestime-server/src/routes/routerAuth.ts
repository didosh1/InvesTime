import * as express from "express";
import * as ClientController from "../controllers/ClientController"
export const routerAuth = express.Router();
 
routerAuth.post("/login", ClientController.login);
routerAuth.post("/registration", ClientController.registration);
routerAuth.get("/authCheck", ClientController.authCheck);