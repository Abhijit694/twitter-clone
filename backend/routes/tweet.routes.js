import express from "express"
import { createTweet, deleteTweet, likeOrDislike } from "../controllers/tweet.controller.js"
import isAuthenticated from "../middlewares/auth.js"

const router = express.Router()


router.route("/create").post(isAuthenticated,createTweet)
router.route("/delete/:id").delete(isAuthenticated,deleteTweet)
router.route("/likeordislike/:id").put(isAuthenticated,likeOrDislike)


export default router