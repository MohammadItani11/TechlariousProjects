var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//google auth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const session = require('express-session');

//defining routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

var app = express();

// Set up session middleware
app.use(session({
  secret: process.env.JWTKEY,
  resave: false,
  saveUninitialized: true
}));


// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());


// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: 'http://localhost:3000/'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
//routers binding
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
