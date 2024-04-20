import express from 'express'
import Routers from './Rootrouter'
import { MongoConnect } from './Config/MongodbConnection'

const app = express()
const PORT = 4011
app.use(express.json())
app.use('/api',Routers)
MongoConnect()
app.listen(PORT,() =>{
    console.log("Hello world")
})