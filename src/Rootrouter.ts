import express from 'express'
import { HomeRoute } from './Routers/HomeRouter';
import { UserRouter } from './Routers/UserRouter';
const Routers  = express.Router();
Routers.use('/home',HomeRoute);
Routers.use('/user',UserRouter);
export default Routers