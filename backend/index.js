import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/database.js"

dotenv.config({
    path:".env"
})

const app = express()

// Connect to database
connectDB()



// Start server
app.listen(process.env.PORT,() => {
    console.log(`Server listening on port ${process.env.PORT}`)
})