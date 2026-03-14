import express, { Express, Request, Response } from "express";
import { users } from "../models/userModel";


export const getUser = async (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'get user succefully',
        users
    })
}