var express = require('express');
var router = express.Router();

//imports
const fileUpload = require("../Middlewares/fileUpload");
const isAuth = require("../Middlewares/isAuth");

//controller
const userController = require("../Controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//add music
router.post("/add-music",isAuth,fileUpload.upload({Destination:"public/audio"}).single("file"),userController.addMusic)

module.exports = router;
