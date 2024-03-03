const jwt = require("jsonwebtoken");
const User = require("../Models/USer");

module.exports = async (req,res,next) => {
    const token = req.headers.token;
try{
    if (!token) {
        // Token is undefined or null
        return res.status(401).json({
          Exception: "Token unavailable",
          result: null,
        });
      }

    let verifiedUser = await jwt.verify(token,process.env.JWTKEY) || token != undefined

    if(!verifiedUser){
        //token unavailable
        return res.status(401).json({
            Exception: "unverified",
            result: null
        })
    }

    //decode user
    decodedUser = await jwt.decode(token);

    if(!decodedUser || !decodedUser.userId){
      // User ID not found in the decoded token
      return res.status(401).json({
        Exception: "Invalid user data in the token",
        result: null,
      });
    }

    //check user
    const user = await User.findById(mongoose.Types.ObjectId(decodedUser.userId));
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
        Exception: "Internal Server Error: couldn't authenticate",
        result: null,
      });
}
    
}