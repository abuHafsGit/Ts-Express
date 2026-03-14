import express, { Express, Request, Response } from "express";
import User, { users } from "../models/userModel";


export const getAllUser = async (req: Request, res: Response) => {

    try {
        const user = await User.find()
        res.status(200).json({
            success: true,
            message: 'get all user succefully',
            user
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
    }

}
export const getUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).json({
            success: true,
            message: 'get user succefully',
            user
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
    }

}


export const createUser = async (req: Request, res: Response) => {

    try {
        const { name, email, password } = req.body;
        const user = new User({
            name, email, password
        })
        await user.save()
        res.status(201).json({
            success: true,
            message: 'create user succefully',
            user
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
    }

}
export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const { name, email, password } = req.body;
        const user = await User.findById(id)
        if (user) {
            user.name = name,
                user.email = email,
                user.password = password
            await user.save()
            res.status(200).json({
                success: true,
                message: 'user updated  succefully',
                user
            })
        }

    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        await User.findByIdAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            message: ' user deleted succefully'
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
    }

}