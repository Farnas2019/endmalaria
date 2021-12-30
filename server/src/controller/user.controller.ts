import { Request, Response} from "express";
import {createUser} from "../services/user.services";
import log from "../logger";
import {omit} from "lodash";

 export async function createUserHandler(req:Request, res:Response){
    
    try {
        const user:any = await createUser(req.body);
        return res.json(omit(user.toJSON(), "password"));
    } catch (error) {
        log.info(error);
        res.status(409).json({"error": error});
    }

 }