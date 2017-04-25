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

//user/profile is just convention (doesnt even need to have /user and still works)
// it's actually student
router.get('/user/profile', function(req, res, next) {
  res.render('student/profile', {
    //layout: parameter of hbs
    layout: 'studentLayout'
  });
});

router.get('/user/team', function(req, res, next) {
  res.render('student/team', {
    layout: 'studentLayout'
  });
});

router.get('/user/teamEdit', function(req, res, next) {
  res.render('student/teamEdit', {
    layout: 'studentLayout'
  });
});

router.get('/user/mentor', function(req, res, next) {
  res.render('student/mentor', {
    layout: 'studentLayout'
  });
});

router.get('/user/noteam', function(req, res, next) {
  res.render('student/noteam', {
    layout: 'studentLayout'
  });
});

router.get('/user/teamProfile', function(req, res, next) {
  res.render('student/teamProfile', {
    layout: 'studentLayout'
  });
});
///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
