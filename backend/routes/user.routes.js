import express from "express"
import { bookmarkTweet, login, logout, register } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/auth.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/bookmark/:id").put(isAuthenticated,bookmarkTweet)

export default router