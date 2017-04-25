var models  = require('../models');
var express = require('express');
var router  = express.Router();

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is mentor
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

// router.get('/protected', function(req, res, next) {
//   res.render('protectedRoute', {
//     username: req.user.username,
//   });
// });

router.get('/login/judgeForm', function(req, res, next) {
  console.log(res.body);
  res.render('login/judgeForm', {
    layout : 'judgeLayout',
  });
});

router.get('/register', function(req, res, next) {
  res.render('mentor/mentorTeam', {
    layout: 'mentorLayout',
  });
});



///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
