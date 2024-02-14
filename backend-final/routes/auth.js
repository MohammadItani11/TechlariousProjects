const express = require("express");
const router = express.Router();

//import controllers
const authController = require('../Controllers/authController');

//login
router.post("/login", authController.login);

//signup
router.post('/signup', authController.signup);

module.exports = router;