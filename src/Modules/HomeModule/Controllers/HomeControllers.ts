import express,{Request,Response} from 'express'
export class HomeContrller{
    Createuser =(req:Request,res:Response) =>{
        res.send(req.body)
    }
}