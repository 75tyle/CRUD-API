import {Schema,model,Document} from "mongoose";
import { Id } from "../Common/GenerateId";

export interface UserModel{
    _id?:string
    name:string,
    age:number
}
export interface UserModelDocument extends Document{
    _id?:string
    name:string,
    age:number
}
const userSchema = new Schema<UserModel>({
    _id:{
        type:String,
        default:Id(20)
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{versionKey:false})
 const user = model<UserModel>("users",userSchema)
 export default user