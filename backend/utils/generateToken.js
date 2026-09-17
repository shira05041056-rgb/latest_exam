import jwt from "jsonwebtoken"
import "dotenv/config"


export function generateToken(email){
    const token = jwt.sign(email, process.env.TOKEN_SECRET)
    return token
}
export function verifyToken(token){
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    return verify
}


