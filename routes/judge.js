var models  = require('../models');
var express = require('express');
var router  = express.Router();

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is judge
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

router.get('/judge/judgeForm', function(req, res, next) {
  res.render('judge/judgeForm', {
    layout : 'judgeLayout',
  });
});

router.get('/judge/judgeRubric', function(req, res, next) {
  res.render('judge/judgeRubric', {
    layout: 'judgeLayout',
  });
});

router.get('/judge/judgeTeam', function(req, res, next) {
  res.render('judge/judgeTeam', {
    layout: 'judgeLayout',
  });
});

router.get('/judge/judgeEdit', function(req, res, next) {
  res.render('judge/judgeEdit', {
    layout: 'judgeLayout',
  });
});

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
