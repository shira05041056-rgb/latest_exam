import express from "express"
import { getUserCtrl, loginCtrl, registerCtrl } from "../controllers/myApp.controller.js";


const router = express.Router()



router.post("/login", loginCtrl)
router.post("/register", registerCtrl)
router.get("/profile", getUserCtrl)


export default router