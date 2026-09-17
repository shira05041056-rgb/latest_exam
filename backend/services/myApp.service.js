import { createUserDAL, findUserByEmailDAL } from "../DAL/myApp.dal.js";
import { appError } from "../middleware/errorHendler.js";
import { generateToken, verifyToken } from "../utils/generateToken.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";


export async function login({ email, password }) {
    const existUser = await findUserByEmailDAL(email);
    if (!existUser) throw appError("האימייל או הסיסמה אינם נכונים.", 404);
    const goodPass = await comparePassword(password, existUser.password);
    if (!goodPass) throw appError("האימייל או הסיסמה אינם נכונים.", 404);
    const token = generateToken(email);
    return { email, token };
}

export async function register({ username, email, password }) {
    const existUser = await findUserByEmailDAL(email);
    if (existUser) throw appError("האימייל משויך כבר לחשבון אחר.", 409);
    const hashPass = await hashPassword(password);
    const { insertedId } = await createUserDAL({ username, email, password: hashPass });
    return { username, email, insertedId };
}

export async function getUser(token) {
    const goodToken = token.split("Barear ")[1];
    const email = verifyToken(goodToken);
    const existUser = await findUserByEmailDAL(email);
    delete existUser.password;
    return existUser;
}