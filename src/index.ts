import express from 'express'
import Routers from './Rootrouter'
import { MongoConnect } from './Config/MongodbConnection'
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as v1 from "./Docs/swagger-v1.json";
import * as v2 from "./Docs/swagger-v2.json";

const app = express()
app.use("/api-docs/v1", swaggerUi.serveFiles(v1,{}),swaggerUi.setup(v1));
app.use("/api-docs/v2", swaggerUi.serveFiles(v2,{}),swaggerUi.setup(v2));
const PORT = 4011
app.use(express.json())
app.use('/api',Routers)
MongoConnect()
app.listen(PORT,() =>{
    console.log("Hello world")
})