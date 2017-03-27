var express = require('express');
var router = express.Router();
var models = require('../models');


/*
	MUST BE LOGGED IN AFTER THIS POINT
*/

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated())
    return next()
  req.flash('error', 'You have to be logged in to access the page.')
  res.redirect('/')
}

var isJudge = function(req, res, next) {
  if (req.isAuthenticated())
    return next()
  req.flash('error', 'You do not have the necessary permissions.')
  res.redirect('/')
}

function ensureOnlyCompany(req, res, next) {
  if (isCompany(req.user)) {
    return next();
  }
  res.redirect('/login')
}

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

router.post('/', function(req, res, next) {
  models.User
    .findOrCreate({
      where: {
        username: req.body.user
      }
    })
    .spread(function(user, created) {
      // console.log(user.get({
      //   plain: true
      // }))
      // console.log(created);
      console.log(user.get({
        plain: true
      }));

      res.json({
        created: created
      });
    });
});

router.put('/', function(req, res, next) {});

module.exports = router;
