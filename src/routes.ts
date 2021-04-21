import {Router} from "express"
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController"

const routes = Router(); //router seria igual o app.get, por exemplo

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/user", usersController.create);


export {routes}