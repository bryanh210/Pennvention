// Add Passport-related auth routes here.

var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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
  router.post('/login', passport.authenticate('local',{
    successRedirect: '/protected',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // GET Logout page
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

  return router;
};
