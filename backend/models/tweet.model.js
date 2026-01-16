import mongoose from "mongoose";
import User from "./user.model";


const tweetSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        like: {
            type: Array,
            default: []
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
        bookmarks: {
            type: Array,
            default: []
        },

    }
)

const Tweet = mongoose.model("Tweet",tweetSchema)

export default Tweet;