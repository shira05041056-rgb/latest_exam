import { ObjectId } from "bson";
import { db } from "../db/db.js";

const users = db.collection("users")


export async function createUserDAL(user) {
    const newUser = await users.insertOne(user)
    return newUser
}

export async function findUserByEmailDAL(email) {
    const existUser = await users.findOne({email: email})
    return existUser
}

