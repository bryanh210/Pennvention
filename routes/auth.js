// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var config = require('../config.js');
var LocalStrategy = require('passport-local').Strategy;

var callbackURL = "localhost:3000" || config.DATABASE_URL || "localhost:3000"

module.exports = function(passport) {

  // GET registration page
  router.get('/signup', function(req, res) {
    res.render('signup', {
      message: req.flash('signupMessage')
    });
  });


  // GET Login page
  router.get('/login', function(req, res) {
    res.render('login', {
      message: req.flash('loginMessage')
    });
  });

  // POST Login page
  // router.post('/login', passport.authenticate('local',{
  //   successRedirect: '/protected',
  //   failureRedirect: '/login',
  //   failureFlash: true
  // }));

  router.post('/login', function(req, res) {
    console.log('TEST', req.body.loginEmail)
    console.log('pass', req.body.loginPassword)
    console.log('TEST', req.body)
  });

  // GET Logout page
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
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

    console.log(email, role, salt, hashedPassword)

    fetch(callbackURL + '/api/v1/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        salt: salt,
        hash: hashedPassword,
        role: role
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        console.log("BEST")
        res.redirect('/login');
      } else {
        console.log("FEST")
        req.flash('error', responseJson.error);
      }
    })
    .catch((err) => {
      console.log('error', err)
    });
    // models.User
    //   .findOrCreate({
    //     where: {
    //       email: email
    //     },
    //     defaults: {
    //       salt: salt,
    //       hash: hashedPassword
    //     }
    //   })
    //   .spread(function(user, created) {
    //     console.log(user.get({
    //       plain: true
    //     }));
    //     console.log(created);
    //     if (!created) {
    //       req.flash('error', "That username is already taken.");
    //     }
    //   });
    });

  return router;
};
