import jwt from "jsonwebtoken"

const genToken = (userId)=>{
    jwt.sign({userId}, process.env.jwt_secret, {expiresIn:'7d'})
}

export default genToken