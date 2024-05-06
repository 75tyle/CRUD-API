import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import user, { UserModel, UserModelDocument } from "../../../Models/User"
import { Id } from "../../../Common/GenerateId"
import { Login } from "../../../Models/Login"

export function GetUser(){
    return user.find()
}
export function CreateUser(req:UserModel){
            req._id = Id(7)
    return user.create(req)
}

export function FindUser(query:FilterQuery<UserModelDocument>,option:QueryOptions={lean:true}){
    return  user.find(query,{},option)
}
export function Findandupdate(query:FilterQuery<UserModelDocument>,update:UpdateQuery<UserModelDocument>,option:QueryOptions){
    return user.findOneAndUpdate(query,update,option)
}
export function Deleteuser(query:FilterQuery<UserModelDocument>){
    return user.deleteOne(query)
}

export function LogIn(req:Login){
    return user.findOne({Email:req.Email,Password:req.Password}).then((res:any) =>{
       if(res.Email == req.Email && res.Password == req.Password){
        return {Message:"Login Success",code:200}
       }else{
        return {Message:"Credetials Is Not valid",code:300}
       }
    }).catch(err =>{
        return {Message:"Failed",code:300}
    })
  
}