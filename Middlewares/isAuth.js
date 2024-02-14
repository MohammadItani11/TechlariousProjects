const jwt = require("jsonwebtoken");

module.exports.isAuth = (req,res,next) => {
    const token = req.header.token;

    let verifiedUser = jwt.verify(token) || token != undefined

    if(!verifiedUser){
        return res.status(401).json({
            Exception: "unverified",
            result: null
        })
    }

    req.user = jwt.decode(token);

    next()
}