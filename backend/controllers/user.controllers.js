import { response } from "express"
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import genToken from "../utils/genToken.js"

const cookieOptions = {
    httpOnly : true,
    //avois xas and csrf attacks 
}

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

        // generate gentoken
        const token = genToken(newUser._id)
        res.cookie( "token", token, cookieOptions)

        res.status(200).json({newUser})
        
    }
     catch{
        res.status(500).json({message: "internal server crashed"}, error);
    }

}




const loginUser = async(req, res)=>{
        
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(422).json({message: "All fields are required"})
        }

        const userExists = User.findOne({email})

        if(!userExists){
            return res.status(404).json({message: "User not found"})
        }

        const correctPassword = bcrypt.compareSync(password, userExists.password)


        if(!correctPassword){
            return res.status(401).json({message: " Password not correct"})
        }

        const token = genToken(userExists._id)
        res.cookie( "token", token, cookieOptions)

        res.status(200).json(newUser)
    }
     catch{
        res.status(500).json({message: "internal server crashed"}, error);
    }

}

export const getUser = (req, res)=>{

    res.status(200).json(req.user)
}
export {registerUser, loginUser}