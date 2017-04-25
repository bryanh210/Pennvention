var models  = require('../models');
var express = require('express');
var router  = express.Router();

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is student
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

router.get('student/profile', function(req, res, next) {
  res.render('student/profile', {
    username: req.user.username,
  });
});

router.get('student/team', function(req, res, next) {
  res.render('student/team', {
    username: req.user.username,
  });
});

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
