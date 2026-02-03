import express from "express"
import { createTweet, deleteTweet } from "../controllers/tweet.controller.js"
import isAuthenticated from "../middlewares/auth.js"

const router = express.Router()


router.route("/create").post(isAuthenticated,createTweet)
router.route("/delete/:id").delete(isAuthenticated,deleteTweet)


export default router