const express = require("express");
const router = express.Router();

const passport = require("passport")

const { body } = require("express-validator");

//import controllers
const authController = require("../Controllers/authController");

//login
router.post("/login", authController.login);

//signup
router.post(
  "/signup",
  [
    body("userName").isEmail().normalizeEmail().withMessage("Enter a valid email"),
    body("name").trim().isLength({ min: 3 }).withMessage("Enter a valid name (min 3 characters)"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
  ],
  authController.signup
);

//google auth login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route for Google OAuth2 authentication
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to custom authentication controller
    //authController.authenticateUser(req, res);
    return 'dpnr'
  }
);


module.exports = router;
