const jwt = require("jsonwebtoken");
const User = require("../backend-final/Models/User");

module.exports.isAuth = async (req,res,next) => {
    const token = req.header.token;
try{
    let verifiedUser = await jwt.verify(token) || token != undefined

    if(!verifiedUser){
        //token unavailable
        return res.status(401).json({
            Exception: "unverified",
            result: null
        })
    }

    //decode user
    verifiedUser = await jwt.decode(token);

    //check user
    const user = await User.findOneById(verifiedUser.id);
    if(user === undefined || user === null){
        //user not found
        return res.status(401).json({
            Exception: "user not found",
            result: null
        })
    }

    //forward the user in the request
    req.user = user;
    next();
}
catch(error){
    //error handling
    console.log(error);
    return res.status(500).json({
        Exception: "Internal Server Error: couldn't change password",
        result: null,
      });
}
    
}