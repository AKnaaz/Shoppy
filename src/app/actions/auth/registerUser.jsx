"use server"

import bcrypt from "bcrypt";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async (paylaod) => {
    const userCollection = dbConnect(collectionNameObj.userCollection)

    const { email, password} = paylaod;
    if(!email || !password) return null;

    const user = await userCollection.findOne({email: paylaod.email})

    if(!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        paylaod.password = hashedPassword
        const result = await userCollection.insertOne(paylaod)
        result.insertedId = result.insertedId.toString()
        return result;
    }
    return null;
}