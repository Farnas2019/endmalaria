import mongoose, { model, Schema } from "mongoose";
import config from "config";
import bycrypt from "bcrypt";


export interface UserDocument extends mongoose.Document{
    email: string;
    name: string;
    password:string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword:string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required:true,
        type: String,
    },
    password:{
        required: true,
        type: String
    }
},{timestamps:true});

userSchema.pre("save", async function(next){
    const user = this as UserDocument;

    if(!user.isModified("password")) return next();
    const salt = await bycrypt.genSalt(config.get("saltGenerator"));
    const hash = await bycrypt.hash(user.password, salt);

    user.password = hash;

    return next();
})
userSchema.methods.comparePassword = async function(candidatePassword: string){
    const user = this as UserDocument;

    return bycrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;