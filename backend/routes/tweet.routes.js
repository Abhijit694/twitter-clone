import express from "express"
import { createTweet } from "../controllers/tweet.controller.js"
import isAuthenticated from "../middlewares/auth.js"

const router = express.Router()


router.route("/create").post(isAuthenticated,createTweet)


export default router