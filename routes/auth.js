// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var config = require('../config.js');
var LocalStrategy = require('passport-local').Strategy;

var fetch = require('node-fetch');
var callbackURL = config.CALLBACK_URL || "http://localhost:3000"

module.exports = function(passport) {

  // GET registration page
  router.get('/register', function(req, res) {
    res.redirect('login')
  });


  // GET Login page
  router.get('/login', function(req, res) {
    res.render('login', {
      error: req.flash('error')[0],
      loginMessage: req.flash('loginError'),
      registerMessage: req.flash('registerError')
    });
  });

  // GET Redirect Page - Checks to see what type of user is logged in.
  router.get('/redirect', function(req, res) {
    if (req.user.role === 'student') {

      fetch(callbackURL + '/api/v1/student/' + req.user.id, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === false) {
            // If table doesnt exist, create one and redirect to profile page.
            fetch(callbackURL + '/api/v1/student', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: req.user.id,
                UserId: req.user.id
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.success === true) {
                res.redirect('/student/initial');
              } else {
                res.redirect('/error')
              }
            })
            .catch((err) => {
              console.log('error', err)
            })

        } else {
          res.redirect('/student/profile')
        }
      })
      .catch((err) => {
        console.log('error')
      })

    }
    if (req.user.role === 'judge') {

      fetch(callbackURL + '/api/v1/judge/' + req.user.id, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === false) {
            // If table doesnt exist, create one and redirect to profile page.
            fetch(callbackURL + '/api/v1/judge', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: req.user.id,
                UserId: req.user.id
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.success === true) {
                res.redirect('/judge/initial');
              } else {
                res.redirect('/error')
              }
            })
            .catch((err) => {
              console.log('error', err)
            })

        } else {
          res.redirect('/judge/profile')
        }
      })
      .catch((err) => {
        console.log('error')
      })

    }
    if (req.user.role === 'mentor') {

      fetch(callbackURL + '/api/v1/mentor/' + req.user.id, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === false) {
            // If table doesnt exist, create one and redirect to profile page.
            fetch(callbackURL + '/api/v1/mentor', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: req.user.id,
                UserId: req.user.id
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.success === true) {
                res.redirect('/mentor/initial');
              } else {
                res.redirect('/error')
              }
            })
            .catch((err) => {
              console.log('error', err)
            })

        } else {
          res.redirect('/mentor/profile')
        }
      })
      .catch((err) => {
        console.log('error')
      })
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
