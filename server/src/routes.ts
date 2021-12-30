import { Express, Request,Response } from "express";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";
import { createUserHandler } from "./controller/user.controller";

export default function( app: Express){
    app.post("/new/user", validateRequest(createUserSchema), createUserHandler);
}