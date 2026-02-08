import express from "express"
import { bookmarkTweet, getProfile, login, logout, register, suggestedUsers } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/auth.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/bookmark/:id").put(isAuthenticated,bookmarkTweet)
router.route("/profile/:id").get(isAuthenticated,getProfile)
router.route("/suggestedusers").get(isAuthenticated,suggestedUsers)

export default router