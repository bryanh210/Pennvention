var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

/*
	MUST BE LOGGED IN AFTER THIS POINT
*/

// var isAuthenticated = function(req, res, next) {
//   if (req.isAuthenticated())
//     return next()
//   req.flash('error', 'You have to be logged in to access the page.')
//   res.redirect('/')
// }

// var isJudge = function(req, res, next) {
//   if (req.isAuthenticated())
//     return next()
//   req.flash('error', 'You do not have the necessary permissions.')
//   res.redirect('/')
// }

// function ensureOnlyCompany(req, res, next) {
//   if (isCompany(req.user)) {
//     return next();
//   }
//   res.redirect('/login')
// }

// app.get('/company/page', ensureOnlyCompany, function(req, res) {
//   // serve the company page
// });

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

router.post('/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  if (!username || !password){
    req.flash('error', "Please fill in all the fields.");
    res.redirect('/signup');
  }

  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt)

  models.User.create({
    username: username,
    salt: salt,
    password: hashedPassword
  }).then(function(){
    res.redirect('/');
  }).catch(function(error){
    //user already exists
    console.log(error);
    req.flash('error', "That username is already taken. Please choose another username.");
  });
});

router.put('/', function(req, res, next) {});

module.exports = router;
