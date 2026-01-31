import Tweet from "../models/tweet.model.js"

export const createTweet = async (req,res) => {
    try {
        const {description} = req.body
        //  This id is placed here by the isAuthenticated middleware
        const loggedInUserId = req.id

        if(!description){
            return res.status(400).json({
                message: "Description is required",
                success: false
            })
        }
        const newTweet = await Tweet.create({
            description,
            userId: loggedInUserId,
        })
        return res.status(201).json({
            message: "Tweet created successfully",
            success: true,
            tweet: newTweet
        })
    } catch (error) {
        console.log("Error creating tweet : ",error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}