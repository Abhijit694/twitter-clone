import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"


export const register = async (req,res) => {
    try {
        const { name,username,email,password,confirmPassword } = req.body

        // Trimmed input fields
        const trimmedName = name.trim()
        const tirmmedUsername = username.trim()
        const trimmedEmail = email.trim()

        if(!trimmedName || !tirmmedUsername || !trimmedEmail || !password || !confirmPassword){
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            })
        }

        const user = await User.findOne({ email: trimmedEmail })
        if(user){
            return res.status(409).json({
                message: "User already exist with this email Id.",
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
            username: tirmmedUsername,
            email: trimmedEmail,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account created successfully",
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