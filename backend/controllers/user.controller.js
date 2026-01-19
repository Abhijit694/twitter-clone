import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"


export const register = async (req,res) => {
    try {
        const { name,username,email,password,confirmPassword } = req.body

        // Trimmed input fields
        const trimmedName = name.trim()
        const trimmedUsername = username.trim()
        const trimmedEmail = email.trim()
        if(!trimmedName || !trimmedUsername || !trimmedEmail || !password || !confirmPassword){
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne({ email: trimmedEmail })
        if(user){
            return res.status(409).json({
                message: "User already exist with this email Id.",
                user,
                success: false
            })
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                message: "Password and Confirm Password didn't match.",
                success: false
            })
        }
        const hashedPassword = await bcryptjs.hash(password,10)
        await User.create({
            name: trimmedName,
            username: trimmedUsername,
            email: trimmedEmail,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error.",
            success: false
        })
    }
}

export const login = async (req,res) => {
    try {
        const { email,password } = req.body

        //trim email
        const trimmedEmail = email?.trim()
        if(!trimmedEmail || !password){
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            })
        }
        const user = await User.findOne({ email: trimmedEmail })
        if(!user){
            return res.status(401).json({
                message: "Email not found.",
                user,
                success: false
            })
        }
        const isPasswordMatched = await bcryptjs.compare(password,user.password)
        if(!isPasswordMatched){
            return res.status(401).json({
                message: "Incorrect password.",
                success: false
            })
        }
        const token = jwt.sign({userId: user._id},process.env.JWT_TOKEN_SECRET,{expiresIn:"1d"})
        return res.status(200).cookie("token",token,{
                httpOnly:true,
                sameSite:"strict",
                secure: process.env.NODE_ENV === "production",
                maxAge:1*24*60*60*1000
            })
            .json({
            message: `Welcome back ${user.username}`,
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}