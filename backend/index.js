import dotenv from "dotenv"
dotenv.config()


import express from "express"
import connectDB from "./config/database.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import tweetRouter from "./routes/tweet.routes.js"


const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Connect to database
connectDB()


// API
app.use("/api/v1/user",userRouter)
app.use("/api/v1/tweet",tweetRouter)


app.get("/home",(req,res) => {
    res.status(200).json({
        message: "Coming from backend",
        success: true
    })
})


// Start server
app.listen(process.env.PORT,() => {
    console.log(`Server listening on port ${process.env.PORT}`)
})