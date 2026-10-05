import { response } from "express"
import User from "../models/user.model.js"
import bcrypt from "bcrypt"

const registerUser = async(req, res)=>{

    const {name, userName, email, password} = req.body

    try{

        if(!userName || !name || !password || !email){
            return res.status(422).json({message : " All fields required"})
        }

        // if username already exists

        const userNameExists = await User.findOne({userName})


        if(userNameExists){
            return res.status(400).json({message : "Username already exists"})
        }

        const emailExists = await User.findOne({email})


        if(emailExists){
            return res.status(400).json({message : "Email already exists"})
        }

        if(password.length <= 6){
            return res.status(400).json({message : "password length not valid"})
        }

        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = await User.create({name, userName, password : hashedPassword, email})

        res.status(200).json({newUser})
        
    }
     catch{
        res.status(500).json({message: "internal server crashed"})
    }

}


export {registerUser}