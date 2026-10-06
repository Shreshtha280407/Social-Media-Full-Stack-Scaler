import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()
const port = 8002

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

mongoose.connect(process.env.dburl).then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})




app.use(express.json())
app.use(cookieParser())
app.use('/users', userRoutes)

app.listen(port, ()=>{

})