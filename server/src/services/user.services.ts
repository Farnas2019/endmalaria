import { DocumentDefinition } from "mongoose";
import User, {UserDocument} from "../model/user.model";
import log from "../logger"
export async function createUser(input: DocumentDefinition<UserDocument>){
    try {
        return User.create(input);
    } catch (error) {
        log.info(error);
    }
}