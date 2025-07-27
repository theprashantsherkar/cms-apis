import jwt from "jsonwebtoken"


export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    if (!token){
        return res.json({
            success: false,
            message: "user is not authenticated"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err){
        console.log(err);
        return req.json({
            success: false,
            message: "internal server error"
        });
    }
}