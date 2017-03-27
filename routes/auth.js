// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

module.exports = function(passport) {

// GET registration page
router.get('/signup', function(req, res) {
  res.render('signup', {
    message: req.flash('signupMessage')
  });
});

router.post('/signup', function(req, res) {
  // validation step
  var username = req.body.username
  var password = req.body.password

  if (!username || !password) {
    req.flash('error', "Please fill in all the fields.")
    res.redirect('signup')
  }

  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)

  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword
  }

  models.User.create(newUser).then(function() {
    res.redirect('/')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
});

// GET Login page
router.get('/login', function(req, res) {
  res.render('login', {
    message: req.flash('loginMessage')
  });
});

// POST Login page
router.post('/login', passport.authenticate('local'), {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
});

// GET Logout page
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

return router;
};