var models  = require('../models');
var express = require('express');
var router  = express.Router();

var fetch = require('node-fetch');
var callbackURL = "http://localhost:3000" || config.DATABASE_URL || "http://localhost:3000"

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is student
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

// GET school index page
router.get('/school', function(req, res, next) {
  res.render('student/profile', {
    layout: 'studentLayout'
  });
});

//GET school profile page
router.get('/school/profile', function(req, res, next) {
  res.render('student/profile', {
    layout: 'studentLayout'
  });
});

//GET
router.get('/student/profile/edit', function(req, res, next) {
  res.render('student/profile_edit', {
    layout: 'studentLayout'
  });
});

router.get('/student/initial', function(req, res, next) {
  res.render('student/profile_edit_initial', {
    layout: 'studentLayout'
  });
});

router.post('/student/initial', function(req, res, next) {

  fetch(callbackURL + '/api/v1/student/' + req.user.id, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      skypeUsername: req.body.skypeUsername,
      typeOfStudent: req.body.typeOfStudent,
      school: req.body.school,
      expectedYearOfGraduation: req.body.expectedYearOfGraduation,
      TeamId: req.body.TeamId
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      res.redirect('/student');
    } else {
      req.flash('error', responseJson.error.errors[0].message);
      res.redirect('/student/initial')
    }
  })
  .catch((err) => {
    console.log('error', err)
  })

});

router.get('/student/team', function(req, res, next) {
  res.render('student/team', {
    layout: 'studentLayout'
  });
});

router.get('/student/team/edit', function(req, res, next) {
  res.render('student/teamEdit', {
    layout: 'studentLayout'
  });
});

router.get('/student/mentor', function(req, res, next) {
  res.render('student/mentor', {
    layout: 'studentLayout'
  });
});

router.get('/student/noteam', function(req, res, next) {
  res.render('student/noteam', {
    layout: 'studentLayout'
  });
});

router.get('/student/teamProfile', function(req, res, next) {
  res.render('student/teamProfile', {
    layout: 'studentLayout'
  });
});
///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
