"use server"

import bcrypt, { compare } from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (paylaod) => {
    const {email, password} = paylaod;

    const userCollection = dbConnect(collectionNameObj.userCollection)
    const user = await userCollection.findOne({email})
    if(!user) return null;
    const isPasswordOk = bcrypt.compare(user.password, password)
    if(!isPasswordOk) return null;

    return user;
}