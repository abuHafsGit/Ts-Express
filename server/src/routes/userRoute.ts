import express, { Express, Request, Response } from "express";
import { getUser } from "../controllers/userControllers";
const userRouter = express.Router()



userRouter.get('/', getUser)

export default userRouter
