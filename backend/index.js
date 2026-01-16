import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/database.js"
import cookieParser from "cookie-parser"

dotenv.config({
    path:".env"
})

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Connect to database
connectDB()



// Start server
app.listen(process.env.PORT,() => {
    console.log(`Server listening on port ${process.env.PORT}`)
})