import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import user, { UserModel, UserModelDocument } from "../../../Models/User"

export function GetUser(){
    return user.find()
}
export function CreateUser(req:UserModel){
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