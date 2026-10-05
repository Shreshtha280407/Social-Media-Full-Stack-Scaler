import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 8002


mongoose.connect(process.env.dburl).then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})



app.listen(port, ()=>{

})