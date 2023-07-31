import express, { Express, Request, Response, IRouter } from "express";

export const route: IRouter = express.Router();

// user login
// User sign-in
route.get('/login', (req:Request, res:Response)=> {
    // We will use the req body/payload to autheticate the user
})