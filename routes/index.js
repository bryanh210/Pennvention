var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	// res.render('index', {
// 	// 	title: 'Express'
// 	// });
// 	console.log(models.Users);
// 	models.Users.findAll().then(function(users) {
// 		console.log(users);
// 		res.render('index', {
// 			title: 'list of all the users',
// 			users: users
// 		});
// 	});
// });



router.get('/', function(req, res) {
  models.User.findAll({
    include: [models.Task]
  }).then(function(users) {
    console.log(users);
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});


module.exports = router;