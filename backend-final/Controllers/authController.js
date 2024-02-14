//imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//import modals
const User = require("../Models/User");
const Admin = require("../Models/Admin");

//handle signup
module.exports.signup = async (req, res) => {
  //extract data
  const userName = req.body.userName;
  const password = req.body.password;
  const name = req.body.name;
  const role = req.query.role;

  try {
    let user = null;
    user =
      (await User.findOne({ userName })) || (await Admin.findOne({ userName }));

    if (user !== null) {
      //user already found
      return res.status(209).json({
        Exception: "User Already found",
        result: null,
      });
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10)

    if (role && role.toString() === "admin") {
      user = new Admin({
        name,
        password: hashedPassword,
        userName,
      });
    } else if (!role) {
      user = new User({
        name,
        password: hashedPassword,
        userName,
      });
    }

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
  const user =
    (await User.findOne({ userName })) ||
    (await Admin.findOne({ userName }));

  if (!user ||  !(await bcrypt.compare(password, user.password)) ) {
    //user not found
    return res.status(401).json({
      Exception: "Sorry wrong credentials",
      result: null,
    });
  }

  //create jwt token
  const jwtUser = await jwt.sign({
    ...user,
    role: user instanceof Admin ? "Admin" : "User",
  },
  process.env.JWTKEY
  );

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
