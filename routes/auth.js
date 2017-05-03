// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var config = require('../config.js');
var LocalStrategy = require('passport-local').Strategy;

var fetch = require('node-fetch');
var callbackURL = "http://localhost:3000" || config.DATABASE_URL || "http://localhost:3000"

module.exports = function(passport) {

  // GET registration page
  // router.get('/login#signup', function(req, res) {
  //   console.log('WTF', req.flash('error'))
  //   res.render('login', {
  //     message: req.flash('error')
  //   });
  // });


  // GET Login page
  router.get('/login', function(req, res) {
    res.render('login', {
      error: req.flash('error')[0],
      loginMessage: req.flash('loginError'),
      registerMessage: req.flash('registerError')
    });
  });

  router.get('/redirect', function(req, res) {
    if (req.user.role === 'student') {
      res.redirect('/user')
    }
    if (req.user.role === 'judge') {
      res.redirect('/judge')
    }
    if (req.user.role === 'mentor') {
      res.redirect('/mentor')
    }
    if (req.user.role === 'admin') {
      res.redirect('/admin')
    }
  });

  // POST Login page
  router.post('/login', passport.authenticate('local',{
    successRedirect: '/redirect',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // router.post('/login', function(req, res) {
  //   console.log('TEST', req.body.loginEmail)
  //   console.log('pass', req.body.loginPassword)
  //   console.log('TEST', req.body)
  // });

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
        req.flash('registerError', responseJson.error.errors[0].message);
        res.redirect('/login#signup')
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  });

  return router;
};
