import {Schema,model,Document} from "mongoose";
import { Id } from "../Common/GenerateId";

export interface UserModel{
    _id?:string
    Name:string,
    Email:string,
    Password:string,
}
export interface UserModelDocument extends Document{
    _id?:string
    Name:string,
    Email:string,
    Password:string,
}

const userSchema = new Schema<UserModel>({
    _id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
},{versionKey:false})
 const user = model<UserModel>("users",userSchema)
 export default user