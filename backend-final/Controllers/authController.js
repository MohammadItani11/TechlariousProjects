//imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');

//import modals
const User = require("../Models/USer");

//handle signup
module.exports.signup = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ Exception: errors.array().map(error => error.msg), result: null });
  }


  //extract data
  const userName = req.body.userName;
  const password = req.body.password;
  const name = req.body.name;

  try {
    let user = null;
    user =
      (await User.findOne({ userName }));

    if (user !== null) {
      //user already found
      return res.status(209).json({
        Exception: "User Already found",
        result: null,
      });
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10)

      user = new User({
        name,
        password: hashedPassword,
        userName,
        role: 'user'
      });

    //saving user
    user.save().then((User) => {
      return res.status(201).json({
        Exception: "",
        result: {
          userName: user.userName,
        },
      });
    });
  } catch (error) {
    //error handling
    console.log(error);
    return res.status(500).json({
      Exception: "Internal Server Error: couldn't sign up",
      result: null,
    });
  }
};

//handle login
module.exports.login = async (req, res) => {
  //extract data
  const userName = req.body.userName;
  const password = req.body.password;

try{
  //find user
  const user = (await User.findOne({ userName }));

  if (!user ||  !(await bcrypt.compare(password, user.password)) ) {
    //user not found
    return res.status(401).json({
      Exception: "Sorry wrong credentials",
      result: null,
    });
  }

  //create jwt token
  console.log(user.id)
  const jwtUser = await jwt.sign({ userId: user.id } , process.env.JWTKEY, { expiresIn: "1h" });

  //return results
  return res
    .status(200)
    .json({ Exception: "", result: "Logged in succesfully", token: jwtUser });
}
catch(error){
    //error handling
    console.log(error);
    return res.status(500).json({
        Exception: "Internal Server Error: couldn't login",
        result: null,
      });
}
};

module.exports.updateProfile = async (req,res,next) => {
  const name = req.body.name;
  const password = req.body.password;
  const profilePic = req.file;
  const hashedPassword = await bcrypt.hash(password);

  try{
    //forming user data
    req.user =  {
      ...req.user,
      name: (name || req.name),
      password: (hashedPassword || req.password),
      profilePic: (profilePic || req.profilePic),
    }

    //updating user data
    await req.user.save();

    //return response
    return res.status(200).json({
      Exception: '',
      result: 'profile updated succesfully'
    })
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