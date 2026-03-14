import express, { Express, Request, Response } from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/userControllers";
const userRouter = express.Router()

userRouter.get('/', getAllUser)
userRouter.get('/:id', getUser)
userRouter.post('/creareUser', createUser)
userRouter.put('/userUpdate/:id', updateUser)
userRouter.post('/userDelete/:id', deleteUser)

export default userRouter
