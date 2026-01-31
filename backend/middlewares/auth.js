import jwt from "jsonwebtoken"

const isAuthenticated = async (req,res,next) => {
    try {
        const token = req.cookies?.token
        // console.log(token);
        if(!token){
            return res.status(401).json({
                message: "User not authenticated.",
                success: false
            })
        }
        const decode = jwt.verify(token,process.env.JWT_TOKEN_SECRET)
        if(!decode){
            return res.status(401).json({
                message: "Invalid token",
                success: false
            })
        }
        // console.log(decode);
        req.id = decode.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export default isAuthenticated