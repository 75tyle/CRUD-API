import express,{Request,Response} from 'express'
import {UserModel, UserModelDocument } from '../../../Models/User'
import { CreateUser, Deleteuser, FindUser, Findandupdate, GetUser } from '../Services/Userservice'
export class UserController{

    GetUser = async(req:Request,res:Response) =>{
           var data = await GetUser()
            res.json({
                data:data
            })
    }
    CreateUser = async(req:Request,res:Response) =>{
        const userdata:UserModel = req.body
        var data = await CreateUser(userdata)
        res.json({
            data:data
        })
    }
    FindUser = async(req:Request,res:Response) =>{
        console.log(req.params.id)
        var id = req.params.id
        var data = await FindUser({_id:id})
        res.json({
            data:data
        })
    }
    Findandupdate = async(req:Request,res:Response) =>{
        var userdata:UserModelDocument = req.body
        var data = await Findandupdate({_id:userdata._id},userdata,{new:true})
        res.json({
            data:data
        })
    }
    Deleteuser = async(req:Request,res:Response) =>{
        var id = req.params.id
        var data = await Deleteuser({_id:id})
        res.json({
            data:data
        })
    }
}