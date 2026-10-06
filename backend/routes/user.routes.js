import express from "express"
import {getUser, loginUser, registerUser} from "../controllers/user.controllers.js"
import isAuthenticated from "../middlewares/auth.middleWare.js"

const userRoutes  = express.Router()


userRoutes.post('/register', registerUser)//register user
userRoutes.post('/login', loginUser) //login user
userRoutes.get('/me', isAuthenticated, getUser)



export default userRoutes