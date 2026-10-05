import express from "express"
import {registerUser} from "../controllers/user.controllers.js"

const userRoutes  = express.Router()



//register user

userRoutes.post('/register', registerUser)


//login user




export default userRoutes