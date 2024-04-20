import mongoose,{connect} from "mongoose";

export function MongoConnect(){
   return connect("mongodb://localhost:27017/test").then((res) => console.log("Connected")).catch((err) =>{console.log(err)})
}