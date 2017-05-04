var models  = require('../models');
var express = require('express');
var router  = express.Router();

var fetch = require('node-fetch');
var config = require('../config.js');
var callbackURL = config.CALLBACK_URL || process.env.CALLBACK_URL || "http://localhost:3000"

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is student
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

// GET student index page
router.get('/student', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(data) {
    res.render('student/student_profile', {
      layout: 'studentLayout',
      user: req.user,
      student: data.student,
      studentMajors: data.studentMajors.map((item) => item.major).join(),
      studentSchools: data.studentSchools.map((item) => item.school).join(),
    })
  })
});

// GET student profile page
router.get('/student/profile', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(data) {
    res.render('student/student_profile', {
      layout: 'studentLayout',
      user: req.user,
      student: data.student,
      studentMajors: data.studentMajors.map((item) => item.major).join(),
      studentSchools: data.studentSchools.map((item) => item.school).join(),
    })
  })
});

// GET student edit profile page
router.get('/student/profile/edit', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(data) {
    res.render('student/student_profile_edit', {
      layout: 'studentLayout',
      user: req.user,
      student: data.student,
      studentMajors: data.studentMajors.map((item) => item.major).join(),
      studentSchools: data.studentSchools.map((item) => item.school).join(),
    })
  })
});

// POST student data for the first time.
router.post('/student/profile/edit', function(req, res, next) {
  updateStudentDataAndReturn(req, res, {
    successLink: '/student',
    studentId: req.user.id,
    failureLink: '/student/profile/edit'
  })
});

// GET initial page for first time login.
router.get('/student/initial', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(data) {
    res.render('student/student_profile_edit_initial', {
      layout: 'studentLayout',
      user: req.user,
      student: data.student,
      studentMajors: data.studentMajors.map((item) => item.major).join(),
      studentSchools: data.studentSchools.map((item) => item.school).join(),
    })
  })

});

// POST student data for the first time.
router.post('/student/initial', function(req, res, next) {
  updateStudentDataAndReturn(req, res, {
    successLink: '/student',
    studentId: req.user.id,
    failureLink: '/student/initial'
  })
});

router.get('/student/team/search', function(req, res, next) {
  res.render('student/team_search', {
    layout: 'studentLayout'
  });
});

router.get('/student/team/add_members', function(req, res, next) {
  res.render('student/team_addMembers', {
    layout: 'studentLayout'
  });
});

router.get('/student/team/profile', function(req, res, next) {
  res.render('student/team_profile', {
    layout: 'studentLayout'
  });
});

router.get('/student/team/profile/edit', function(req, res, next) {
  res.render('student/teamEdit', {
    layout: 'studentLayout'
  });
});

router.get('/student/team/create', function(req, res, next) {
  res.render('student/team_create', {
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

///////////////////////////// HELPER FUNCTIONS //////////////////////////////////

var getStudentData = function(req, res, {
  studentId: studentId
}, fn) {
  var student
  var studentMajors
  var studentSchools
  fetch(callbackURL + '/api/v1/student/' + studentId, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      student = responseJson.student
      return ({'success': true})
    }
  }).then(() => {
    return fetch(callbackURL + '/api/v1/student/majors/StudentId/' + studentId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        studentMajors = responseJson.studentMajors
        return ({'success': true})
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  })
  .then(() => {
    return fetch(callbackURL + '/api/v1/student/schools/StudentId/' + studentId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        studentSchools = responseJson.studentSchools
        return ({'success': true})
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  }).then(() => {
    fn( {
      student: student,
      studentMajors: studentMajors,
      studentSchools: studentSchools
    } )
  })
  .catch((err) => {
    console.log('error', err)
  })
}

var updateStudentDataAndReturn = function(req, res, {
  successLink: successLink,
  studentId: studentId,
  failureLink: failureLink
}) {

  fetch(callbackURL + '/api/v1/student/' + studentId, {
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
    if (!responseJson.success) {
      req.flash('error', responseJson.error.errors[0].message);
      res.redirect(failureLink)
    }
    return
  })
  .then(() => {
    return fetch(callbackURL + '/api/v1/student/majors/StudentId/' + studentId, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (!responseJson.success) {
        req.flash('error', responseJson.error.errors[0].message);
        res.redirect(failureLink)
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  })
  .then(() => {
    return fetch(callbackURL + '/api/v1/student/schools/StudentId/' + studentId, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (!responseJson.success) {
        req.flash('error', responseJson.error.errors[0].message);
        res.redirect(failureLink)
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  })
  .then(() => {

    var majorArray = req.body.major.split(',')

    return majorArray.forEach((major) =>
      fetch(callbackURL + '/api/v1/student/major', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          StudentId: req.user.id,
          major: major
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (!responseJson.success) {
          req.flash('error', responseJson.error.errors[0].message);
          res.redirect(failureLink)
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
    )
  })
  .then(() => {
    return req.body.school.forEach((school) =>
      fetch(callbackURL + '/api/v1/student/school', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          StudentId: req.user.id,
          school: school
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (!responseJson.success) {
          req.flash('error', responseJson.error.errors[0].message);
          res.redirect(failureLink)
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
    )
  })
  .then(() => {
    res.redirect(successLink)
  })
  .catch((err) => {
    console.log('error', err)
  })

}

var getMentorData = function(req, res, {
  studentId: studentId
}, fn) {
  var student
  var studentMajors
  var studentSchools
  fetch(callbackURL + '/api/v1/student/' + studentId, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      student = responseJson.student
      return ({'success': true})
    }
  }).then(() => {
    return fetch(callbackURL + '/api/v1/student/majors/StudentId/' + studentId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        studentMajors = responseJson.studentMajors
        return ({'success': true})
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  })
  .then(() => {
    return fetch(callbackURL + '/api/v1/student/schools/StudentId/' + studentId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success === true) {
        studentSchools = responseJson.studentSchools
        return ({'success': true})
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
  }).then(() => {
    fn( {
      student: student,
      studentMajors: studentMajors,
      studentSchools: studentSchools
    } )
    // res.render(renderFile, {
    //   layout: 'studentLayout',
    //   student: student,
    //   studentMajors: studentMajors.map((item) => item.major).join(),
    //   studentSchools: studentSchools.map((item) => item.school).join(),
    // })
  })
  .catch((err) => {
    console.log('error', err)
  })
}

module.exports = router;
