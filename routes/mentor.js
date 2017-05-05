var models  = require('../models');
var express = require('express');
var router  = express.Router();
var fetch = require('node-fetch');
var config = require('../config.js');

var callbackURL =  "http://localhost:3000" || config.CALLBACK_URL || process.env.CALLBACK_URL 

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
router.get('/mentor', function(req, res, next) {
  getMentorData(req, res, {
    mentorId: req.user.id
  }, function(data) {
    console.log('dataDATA', data);
    res.render('mentor/mentor', {
      layout: 'mentorLayout',
      user: req.user,
      mentor: data.mentor,
      mentorApproval: data.mentorApproval
    })
  })
});


router.get('/mentor/mentorEdit', function(req, res, next) {
  res.render('mentor/mentorEdit', {
    layout : 'mentorLayout',
  });
});

router.post('/mentor/mentorEdit', function(req, res, next) {
  res.render('mentor/mentorEdit', {
    layout : 'mentorLayout',
  });
});

router.get('/mentor/mentorForm', function(req, res, next) {
  res.render('mentor/mentorForm', {
    layout: 'mentorLayout',
  });
});

router.post('/mentor/mentorForm', function(req, res, next) {
  fetch(callbackURL + '/api/v1/mentor/' + req.user.id, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        skypeUsername: req.body.skypeUsername,
        biography: req.body.biography
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('========== INSIDE OF RESPONSEJSON ===========', responseJson)
      if (responseJson.success === true) {
       console.log('========== INSIDE OF RESPONSEJSON.success ===========');

        res.redirect('/mentor');
      } else {
        req.flash('error', responseJson.error.errors[0].message);
        res.redirect('/mentorForm')
      }
    })
    .catch((err) => {
      console.log('error', err)
  })
});

router.get('/mentor/mentorTeam', function(req, res, next) {
  res.render('mentor/mentorTeam', {
    layout: 'mentorLayout',
  });
});




///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

var getMentorData = function(req, res, {
  mentorId: mentorId
}, fn) {
  var mentor
  var mentorApproval
  var mentorExpertise
  fetch(callbackURL + '/api/v1/mentor/' + mentorId, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      mentor = responseJson.mentor
      return ({'success': true})
    }
  }).then(() => {
    return fetch(callbackURL + '/api/v1/mentor/approve/mentorId/' + mentorId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        mentorApproval = responseJson.mentorApproval
        return ({'success': true})
      }
    }).then(() => {
      return fetch(callbackURL + '/api/v1/mentor/expertises/mentorId/' + mentorId, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (reponseJson.success === true) {
          mentorExpertise = responseJson.mentorExpertise
          return ({'success': true})
        }
      })
    })
    .catch((err) => {
      console.log('error', err)
    })
  }).then(() => {
    fn( {
      mentor: mentor,
      mentorApproval: mentorApproval,
      mentorExpertise: mentorExpertise
    })
  })
  .catch((err) => {
    console.log('error', err)
  })
}

module.exports = router;
