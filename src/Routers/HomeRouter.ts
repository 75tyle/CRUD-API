import express,{Request,Response} from 'express'
import { HomeContrller } from '../Modules/HomeModule/Controllers/HomeControllers'
const HomeRoute = express.Router()
var home = new HomeContrller()
HomeRoute.post("/",home.Createuser)
export {HomeRoute}