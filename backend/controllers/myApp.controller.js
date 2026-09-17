import { getUser, login, register } from "../services/myApp.service.js"


export async function loginCtrl(req, res) {
    const {email, password} = req.body
    const user = await login({email, password})
    res.status(200).json(user)    
}
export async function registerCtrl(req, res) {
    const {username, email, password} = req.body
    const user = await register({username, email, password})
    res.status(201).json(user)    
}

export async function getUserCtrl(req, res) {
    const token = req.header("auth")
    const user = await getUser(token)
    res.status(200).json(user)    
}