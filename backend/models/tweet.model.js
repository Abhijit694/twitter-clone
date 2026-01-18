import mongoose from "mongoose";


const tweetSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        likes: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }],
            default: []
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        bookmarks: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }],
            default: []
        },

    },
    {timestamps: true}
)

const Tweet = mongoose.model("Tweet",tweetSchema)

export default Tweet;