import {Router} from "express"
import { SettingsController } from "./controllers/SettingsController";

const routes = Router(); //router seria igual o app.get, por exemplo

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);


export {routes}