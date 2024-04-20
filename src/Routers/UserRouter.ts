import express from 'express'
import { UserController } from '../Modules/UserModule/UserController/UserController'
const UserRouter = express.Router()


var User = new UserController()
UserRouter.get("/getuser",User.GetUser)
UserRouter.post("/createuser",User.CreateUser)
UserRouter.post("/userupdate",User.Findandupdate)
UserRouter.get("/findbyuserid/:id",User.FindUser)
UserRouter.delete("/deleteuser/:id",User.Deleteuser)
export {UserRouter}