var models  = require('../models');
var express = require('express');
var router  = express.Router();
var fetch = require('node-fetch');
var config = require('../config.js');

var callbackURL =  "http://localhost:3000" || config.CALLBACK_URL || process.env.CALLBACK_URL 

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
router.get('/judge', function(req, res, next) {
  getJudgeData(req, res, {
    judgeId: req.user.id
  }, function(data) {
    res.render('judge/judge', {
      layout: 'judgeLayout',
      user: req.user,
      judge: data.judge
    })
  })
});


router.get('/judge/judgeForm', function(req, res, next) {
  res.render('judge/judgeForm', {
    layout : 'judgeLayout',
  });
});

// router.get('/judge/judgeForm', function(req, res, next) {
//   fetch(callbackURL + 'api/v1/judge/' + req.user.id, {
//     method: 'GET',
//   })
//   .then((response) => response.json())
//   .then((responseJson) => {
//     if (responseJson.success === true) {
//     res.render('judge/judgeForm', {
//       layout: 'judgeLayout',
//       judge: responseJson.judge
//     });
//   } else {
//     res.redirect('/login')
//   }
// });
//   .catch((err) => {
//     console.log('error', err)
//   })
// });

router.get('/judge/judgeEdit', function(req, res, next) {
  getJudgeData(req, res, {
    judgeId: req.user.id
  }, function(data) {
    res.render('judge/judgeEdit', {
      layout: 'judgeLayout',
      user: req.user,
      judge: data.judge,
      judgeApproval: data.judgeApproval
    })
  })
});

router.post('/judge/judgeForm', function(req, res, next) {
  fetch(callbackURL + '/api/v1/judge/' + req.user.id, {
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
      if (responseJson.success === true) {
        res.redirect('/judge');
      } else {
        req.flash('error', responseJson.error.errors[0].message);
        res.redirect('/judgeForm')
      }
    })
    .catch((err) => {
      console.log('error', err)
  })
});

router.get('/judge/judgeRubric', function(req, res, next) {
  getJudgeData(req, res, {
    judgeId: req.user.id
  }, function(data) {
    res.render('judge/judgeRubric', {
      layout: 'judgeLayout',
      user: req.user,
      judge: data.judge,
      judgeApproval: data.judgeApproval
    })
  })
});

// router.get('/judge/judgeRubric', function(req, res, next) {
//   fetch(callbackURL + 'api/v1/judge/' + req.user.id, {
//     method: 'GET',
//   })
//   .then((response) => response.json())
//   .then((responseJson) => {
//     if (responseJson.success === true) {
//     res.render('judge/judgeRubric', {
//       layout: 'judgeLayout',
//       judge: responseJson.judge
//     });
//   } else {
//     res.redirect('/login')
//   }
// });
//   .catch((err) => {
//     console.log('error', err)
//   })
// });

router.get('/judge/judgeTeam', function(req, res, next) {
  res.render('judge/judgeTeam', {
    layout: 'judgeLayout',
  });
});

// router.get('/judge/judgeEdit', function(req, res, next) {
//   res.render('judge/judgeEdit', {
//     layout: 'judgeLayout',
//   });
// });

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////
var getJudgeData = function(req, res, {
  judgeId: judgeId
}, fn) {
  var judge
  var judgeApproval
  var judgeExpertise
  fetch(callbackURL + '/api/v1/judge/' + judgeId, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      judge = responseJson.judge
      return ({'success': true})
    }
  }).then(() => {
    return fetch(callbackURL + '/api/v1/judge/approve/JudgeId/' + judgeId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        judgeApproval = responseJson.judgeApproval
        return ({'success': true})
      }
    }).then(() => {
      return fetch(callbackURL + '/api/v1/judge/expertises/JudgeId/' + judgeId, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (reponseJson.success === true) {
          judgeExpertise = responseJson.judgeExpertise
          return ({'success': true})
        }
      })
    })
    .catch((err) => {
      console.log('error', err)
    })
  }).then(() => {
    fn( {
      judge: judge,
      judgeApproval: judgeApproval,
      judgeExpertise: judgeExpertise
    })
  })
  .catch((err) => {
    console.log('error', err)
  })
}


// var getStudentData = function(req, res, {
//   studentId: studentId
// }, fn) {
//   var student
//   var studentMajors
//   var studentSchools
//   fetch(callbackURL + '/api/v1/student/' + studentId, {
//     method: 'GET'
//   })
//   .then((response) => response.json())
//   .then((responseJson) => {
//     if (responseJson.success === true) {
//       student = responseJson.student
//       return ({'success': true})
//     }
//   }).then(() => {
//     return fetch(callbackURL + '/api/v1/student/majors/StudentId/' + studentId, {
//       method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//       if (responseJson.success === true) {
//         studentMajors = responseJson.studentMajors
//         return ({'success': true})
//       }
//     })
//     .catch((err) => {
//       console.log('error', err)
//     })
//   })
//   .then(() => {
//     return fetch(callbackURL + '/api/v1/student/schools/StudentId/' + studentId, {
//       method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//       if (responseJson.success === true) {
//         studentSchools = responseJson.studentSchools
//         return ({'success': true})
//       }
//     })
//     .catch((err) => {
//       console.log('error', err)
//     })
//   }).then(() => {
//     fn( {
//       student: student,
//       studentMajors: studentMajors,
//       studentSchools: studentSchools
//     } )
//     // res.render(renderFile, {
//     //   layout: 'studentLayout',
//     //   student: student,
//     //   studentMajors: studentMajors.map((item) => item.major).join(),
//     //   studentSchools: studentSchools.map((item) => item.school).join(),
//     // })
//   })
//   .catch((err) => {
//     console.log('error', err)
//   })
// }



module.exports = router;
