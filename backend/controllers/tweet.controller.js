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
        })
    } catch (error) {
        console.log("Error creating tweet : ",error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const deleteTweet = async (req,res) => {
    try {
        const {id} = req.params
        const loggedInUserId = req.id   // This is the id of user trying to delete
        // 1. Find the tweet to ensure it exists and get its owner
        const tweet = await Tweet.findById(id)
        if(!tweet){
            return res.status(404).json({
                message: "Tweet not found",
                success: false
            })
        }
        // 2. Check if the logged-in user is the owner of the tweet
        if(tweet.userId.toString() !== loggedInUserId){
            // 403 Forbidden
            return res.status(403).json({
                message: "You are not authorized to delete this tweet",
                success: false
            })
        }
        // 3. If authorized then proceed with deletion
        await Tweet.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Tweet deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}
