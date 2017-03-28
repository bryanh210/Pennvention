var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');


/* GET users listing. */
router.get('/', function(req, res, next) {

  // User.findOne().then(function (user) {
  // 	console.log(user.get('firstName'));
  // });

  models.User.findAll().then(function(users) {
    console.log(users);
    res.render('users', {
      users: users
    });
  });

});

// users/login

router.get('/login', function(req, res) {
  res.render('users/login', {
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/users/login',
  failureFlash: true
}));

// users

router.post('/', function(req, res) {

  var email = req.body.email;
  var password = req.body.password;
  if (!email || !password) {
    req.flash('error', "Please fill in all the fields.");
    res.redirect('/signup');
  }

  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt)

  models.User
    .findOrCreate({
      where: {
        email: email
      },
      defaults: {
        salt: salt,
        hash: hashedPassword
      }
    })
    .spread(function(user, created) {
      console.log(user.get({
        plain: true
      }));
      console.log(created);
      if (!created) {
        req.flash('error', "That username is already taken.");
      }
    });
});

router.put('/', function(req, res, next) {});

module.exports = router;
