// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var config = require('../config.js');
var LocalStrategy = require('passport-local').Strategy;

// TODO These will no longer be needed once we refactor the fetch code into sequelize code.
// var fetch = require('node-fetch');
// var callbackURL = config.CALLBACK_URL || process.env.CALLBACK_URL || "http://localhost:3000"

module.exports = function(passport) {

  // GET registration page
  router.get('/register', function(req, res) {
    return res.redirect('login')
  });


  // GET Login page
  router.get('/login', function(req, res) {
    return res.render('login', {
      loginMessage: req.flash('error'),
      registerMessage: req.flash('registerError')
    });
  });

  // GET Redirect Page - Checks to see what type of user is logged in.
  router.get('/redirect', function(req, res) {
    if (req.user.role === 'student') {
      checkUserRoleAndRedirect(req, res, {
        userModel: models.Student,
        createTableRedirectLink: '/student/initial',
        loginRedirectLink: '/student/profile',
        errorRedirectLink: '/error'
      })
    }
    if (req.user.role === 'judge') {
      checkUserRoleAndRedirect(req, res, {
        userModel: models.Judge,
        createTableRedirectLink: '/judge/judgeForm',
        loginRedirectLink: '/judge/judge',
        errorRedirectLink: '/error'
      })
    }
    if (req.user.role === 'mentor') {
      checkUserRoleAndRedirect(req, res, {
        userModel: models.Mentor,
        createTableRedirectLink: '/mentor/mentorForm',
        loginRedirectLink: '/mentor/mentor',
        errorRedirectLink: '/error'
      })
    }
    if (req.user.role === 'admin') {
      return res.redirect('/admin')
    }
  });

  // POST Login page
  router.post('/login', passport.authenticate('local',{
    successRedirect: '/redirect',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // GET Logout page
  router.get('/logout', function(req, res) {
    req.logout();
    return res.redirect('/login');
  });

  router.post('/register', function(req, res) {
    var email = req.body.registerEmail;
    var password = req.body.registerPassword;
    var role = req.body.registerRole;
    if (!email || !password || ! role) {
      req.flash('error', "Please fill in all the fields.");
      // res.redirect('/signup');
    }
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt)

    models.User.create({
      email: email,
      hash: hashedPassword,
      salt: salt,
      role: role
    }).then(function(user) {
      return res.redirect('/login');
    }).catch(function(err) {
      req.flash('registerError', err.errors[0].message);
      return res.redirect('/login#signup')
    });
  });

  return router;
};

///////////////////////////// HELPER FUNCTIONS //////////////////////////////////

var checkUserRoleAndRedirect = function(req, res, {
  userModel: userModel,
  createTableRedirectLink: createTableRedirectLink,
  loginRedirectLink: loginRedirectLink,
  errorRedirectLink: errorRedirectLink
}) {
  userModel.findOne({
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    if (user) {
       return res.redirect(loginRedirectLink)
    }
    return
  }).then(() => {
    return userModel.create({
      id: req.user.id,
      UserId: req.user.id,
    })
    .then(function(student) {
      return res.redirect(createTableRedirectLink)
    })
  }).catch(function(err) {
    console.log('ERROR', err)
    return res.redirect(errorRedirectLink)
  })
}
