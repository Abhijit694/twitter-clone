import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"


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
        const [existingUser,existingUsername] = await Promise.all([
            User.findOne({email: trimmedEmail}),
            User.findOne({username: trimmedUsername})
        ])
        if(existingUser){
            return res.status(409).json({
                message: "User already exist with this email Id.",
                success: false
            })
        }
        if(existingUsername){
            return res.status(409).json({
                message: "Username taken.",
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
                // secure: process.env.NODE_ENV === "production",
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

export const logout = async(_,res) => {
    try {
        return res.clearCookie("token").status(200).json({
            message: "Logged out successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const bookmarkTweet = async (req,res) => {
    try {
        const loggedInUserId = req.id   // id coming from isAuthenticated middleware
        const tweetId = req.params.id
        const user = await User.findById(loggedInUserId)
        if(user.bookmarks.includes(tweetId)){
            //remove
            await User.findByIdAndUpdate(loggedInUserId,{ $pull: {bookmarks: tweetId}})
            return res.status(200).json({
                message: "Removed from bookmarks",
                success: true
            })
        }else{
            // bookmark
            await User.findByIdAndUpdate(loggedInUserId,{ $addToSet: {bookmarks: tweetId}})
            return res.status(200).json({
                message: "Tweet bookmarked",
                success: true
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const getProfile = async (req,res) => {
    try {
        const id = req.params.id    // id of the profile user want to view
        const user = await User.findById(id).select('-password -email -__v -updatedAt')
        if(!user){
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }
        return res.status(200).json({
            user,
            success: true
        })
    } catch (error) {
        console.log("Get profile error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const suggestedUsers = async (req,res) => {
    try {
        const loggedInUserId = new mongoose.Types.ObjectId(req.id)      // id comes from isAuthenticated middleware
        const limit = 5
        // Get the logged-in user's following list
        const loggedInUser = await User.findById(loggedInUserId).select('following')
        const otherUsers = await User.aggregate([
            {
                $match: {
                    _id: {
                        $ne: loggedInUserId,                // Exclude self
                        $nin: loggedInUser.following        // Exclude already followed users
                    }
                }
            },
            {
                $sample: {size: limit}      // Random selection
            },
            {
                $project: {
                    password: 0,
                    email: 0,
                    updatedAt: 0,
                    __v: 0
                }
            }
        ])
        // you could add a $lookup stage to check for mutual connections

        return res.status(200).json({
            otherUsers,     // I have to consider adding pagination (skip + limit or cursor-based) when want to "load more"
            success: true
        })
    } catch (error) {
        console.log("Suggested users error:",error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const followOrUnfollow = async (req, res) => {
    try {
        const loggedInUserId = req.id
        const userIdToFollow = req.params.id
        
        if (loggedInUserId === userIdToFollow) {
            return res.status(400).json({
                message: "You cannot follow/unfollow yourself",
                success: false
            })
        }

        const loggedInUser = await User.findById(loggedInUserId)
        const userToFollow = await User.findById(userIdToFollow)
        
        if (!loggedInUser || !userToFollow) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }

        const isFollowing = userToFollow.followers.includes(loggedInUserId)
        
        if (isFollowing) {
            await Promise.all([
                User.updateOne({_id: userIdToFollow}, {$pull: {followers: loggedInUserId}}),
                User.updateOne({_id: loggedInUserId}, {$pull: {following: userIdToFollow}})
            ])
            return res.status(200).json({
                message: `You unfollowed ${userToFollow.username}`,
                success: true
            })
        } else {
            await Promise.all([
                User.updateOne({_id: userIdToFollow}, {$addToSet: {followers: loggedInUserId}}),
                User.updateOne({_id: loggedInUserId}, {$addToSet: {following: userIdToFollow}})
            ])
            return res.status(200).json({
                message: `You followed ${userToFollow.username}`,
                success: true
            })
        }
    } catch (error) {
        console.error("Follow or unfollow error:", error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}