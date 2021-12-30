import {AnySchema} from "yup";
import {NextFunction, Request, Response} from "express";
import log from "../logger";

const validate = (schema:AnySchema) => async (
    req:Request, 
    res:Response, 
    next: NextFunction
) => {
    try {
        await schema.validate({
            body:req.body,
            params:req.params,
            query: req.query
        })
        return next();
    } catch (error) {
        log.info(error);
        res.json({"Error":error})
    }
    
}

export default validate;