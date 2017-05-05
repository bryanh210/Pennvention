var models  = require('../models');
var express = require('express');
var router  = express.Router();

var fetch = require('node-fetch');
var config = require('../config.js');
var callbackURL = config.CALLBACK_URL || process.env.CALLBACK_URL || "http://localhost:3000"

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is student
//     return res.redirect('/login');
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
  // res.render('student/team_search', {
  //   layout: 'studentLayout'
  // });
});

router.get('/student/team/add_members', function(req, res, next) {
  // res.render('student/team_addMembers', {
  //   layout: 'studentLayout'
  // });
});

router.get('/student/team/profile', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(studentData) {
    getTeamData(req, res, {
      teamId: studentData.student.TeamId
    }, function(teamData) {
      res.render('student/team_profile', {
        layout: 'studentLayout',
        user: req.user,
        student: studentData.student,
        team: teamData.team,
        teamMentorExpertiseRequested: teamData.teamMentorExpertiseRequested.map((item) => item.expertise).join(),
        teamStrengths: teamData.teamStrengths.map((item) => item.strength).join(),
        teamWeaknesses: teamData.teamWeaknesses.map((item) => item.weakness).join(),
        teamStudents: teamData.teamStudents
      })
    })
  })
});

router.get('/student/team/profile/edit', function(req, res, next) {
  getStudentData(req, res, {
    studentId: req.user.id
  }, function(studentData) {
    getTeamData(req, res, {
      teamId: studentData.student.TeamId
    }, function(teamData) {
      console.log('TEAMDATA', teamData)
      res.render('student/team_profile_edit', {
        layout: 'studentLayout',
        user: req.user,
        student: studentData.student,
        team: teamData.team,
        teamMentorExpertiseRequested: teamData.teamMentorExpertiseRequested.map((item) => item.expertise).join(),
        teamStrengths: teamData.teamStrengths.map((item) => item.strength).join(),
        teamWeaknesses: teamData.teamWeaknesses.map((item) => item.weakness).join(),
        teamStudents: teamData.teamStudents
      })
    })
  })
});

router.get('/student/team/create', function(req, res, next) {
  res.render('student/team_create', {
    layout: 'studentLayout'
  });
});

// POST Create Team -- NEEDS TO BE UPDATED TO REFLECT ITERATIONS AUTOMATICALLY
router.post('/student/team/create', function(req, res, next) {
  fetch(callbackURL + '/api/v1/team', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      teamName: req.body.teamName,
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      deckLink: req.body.deckLink,
      videoLink: req.body.videoLink,
      password: req.body.password,
      IterationId: req.body.IterationId // WILL NEED TO UPDATE THIS LATER
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success === true) {
      fetch(callbackURL + '/api/v1/student/' + req.user.id, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          TeamId: responseJson.team.id
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (!responseJson.success) {
          req.flash('error', responseJson.error.errors[0].message);
          return res.redirect(failureLink)
        }
        return
      })
      .then(() => {
        var strengthArray = req.body.strength.split(',')

        return strengthArray.forEach((strength) =>
          fetch(callbackURL + '/api/v1/team/strength', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              TeamId: responseJson.team.id,
              strength: strength
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if (!responseJson.success) {
              req.flash('error', responseJson.error.errors[0].message);
              return res.redirect(failureLink)
            }
          })
          .catch((err) => {
            console.log('error', err)
          })
        )
      })
      .then(() => {
        var weaknessArray = req.body.weakness.split(',')

        return weaknessArray.forEach((weakness) =>
          fetch(callbackURL + '/api/v1/team/weakness', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              TeamId: responseJson.team.id,
              weakness: weakness
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if (!responseJson.success) {
              req.flash('error', responseJson.error.errors[0].message);
              return res.redirect(failureLink)
            }
          })
          .catch((err) => {
            console.log('error', err)
          })
        )
      })
      .then(() => {
        if (!Array.isArray(req.body.expertise)) req.body.expertise = [req.body.expertise]
        return req.body.expertise.forEach((expertise) =>
          fetch(callbackURL + '/api/v1/team/mentorExpertiseRequested', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              TeamId: responseJson.team.id,
              expertise: expertise
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if (!responseJson.success) {
              req.flash('error', responseJson.error.errors[0].message);
              return res.redirect(failureLink)
            }
          })
          .catch((err) => {
            console.log('error', err)
          })
        )
      })
      .then(() => {
        return res.redirect('/student/team/profile')
      })
      .catch((err) => {
        console.log('error', err)
      })

    } else {
      return res.redirect('/error')
    }
  })
  .catch((err) => {
    console.log('error', err)
  })
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
  models.Student.findOne({
    where: {
      id: studentId
    }
  }).then(function(studentData) {
    student = studentData;
  }).then(() => {
    return models.StudentMajor.findAll({
      where: {
        StudentId: studentId
      }
    }).then(function(studentMajorsData) {
      studentMajors = studentMajorsData
    })
  }).then(() => {
    return models.StudentSchool.findAll({
      where: {
        StudentId: studentId
      }
    }).then(function(studentSchoolsData) {
      studentSchools = studentSchoolsData
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
  models.Student.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    skypeUsername: req.body.skypeUsername,
    typeOfStudent: req.body.typeOfStudent,
    school: req.body.school,
    expectedYearOfGraduation: req.body.expectedYearOfGraduation,
    TeamId: req.body.TeamId
  }, {
    where: {
      id: studentId
    }
  }).then(() => {
    return models.StudentMajor.destroy({
      where: {
        StudentId: studentId
      }
    })
  }).then(() => {
    return models.StudentSchool.destroy({
      where: {
        StudentId: studentId
      }
    })
  }).then(() => {
    var majorArray = req.body.major.split(',')
    return majorArray.forEach((major) =>
      models.StudentMajor.create({
        StudentId: studentId,
        major: major
      })
    )
  }).then(() => {
    if (!Array.isArray(req.body.school)) {req.body.school = [req.body.school]}
    return req.body.school.forEach((school) =>
      models.StudentSchool.create({
        StudentId: studentId,
        school: school
      })
    )
  }).then(() => {
    return res.redirect(successLink)
  }).catch((err) => {
    console.log('error', err)
  })
}

var getTeamData = function(req, res, {
  teamId: teamId
}, fn) {
  var team
  var teamMentorExpertiseRequested
  var teamStrengths
  var teamWeaknesses
  var teamStudents

  models.Team.findOne({
    where: {
      id: teamId
    }
  }).then(function(teamData) {
    team = teamData;
  })
  .then(() => {
    return models.TeamMentorExpertiseRequested.findAll({
      where: {
        TeamId: teamId
      }
    }).then(function(teamMentorExpertiseRequestedData) {
      teamMentorExpertiseRequested = teamMentorExpertiseRequestedData
    })
  })
  .then(() => {
    return models.TeamStrength.findAll({
      where: {
        TeamId: teamId
      }
    }).then(function(teamStrengthsData) {
      teamStrengths = teamStrengthsData
    })
  })
  .then(() => {
    return models.TeamWeakness.findAll({
      where: {
        TeamId: teamId
      }
    }).then(function(teamWeaknessesData) {
      teamWeaknesses = teamWeaknessesData
    })
  })
  .then(() => {
    return models.Student.findAll({
      where: {
        TeamId: teamId
      }
    }).then(function(studentsData) {
      teamStudents = studentsData
    })
  })
  .then(() => {
    fn( {
      team: team,
      teamMentorExpertiseRequested: teamMentorExpertiseRequested,
      teamStrengths: teamStrengths,
      teamWeaknesses: teamWeaknesses,
      teamStudents: teamStudents
    } )
  })
  .catch((err) => {
    console.log('error', err)
  })
}

var updateTeamDataAndReturn = function(req, res, {
  successLink: successLink,
  teamId: teamId,
  failureLink: failureLink
}) {
  models.Team.update({
    teamName: req.body.teamName,
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    deckLink: req.body.deckLink,
    videoLink: req.body.videoLink,
    password: req.body.password
  }, {
    where: {
      id: teamId
    }
  }).then(() => {
    return models.TeamMentorExpertiseRequested.destroy({
      where: {
        TeamId: teamId
      }
    })
  }).then(() => {
    return models.TeamStrength.destroy({
      where: {
        TeamId: teamId
      }
    })
  }).then(() => {
    return models.TeamWeakness.destroy({
      where: {
        TeamId: teamId
      }
    })
  }).then(() => {
    var strengthArray = req.body.strength.split(',')
    return strengthArray.forEach((strength) =>
      models.TeamStrength.create({
        TeamId: teamId,
        strength: strength
      })
    )
  }).then(() => {
    var weaknessArray = req.body.weakness.split(',')
    return weaknessArray.forEach((weakness) =>
      models.TeamWeakness.create({
        TeamId: teamId,
        weakness: weakness
      })
    )
  }).then(() => {
    if (!Array.isArray(req.body.expertise)) req.body.expertise = [req.body.expertise]
    return req.body.expertise.forEach((expertise) =>
      models.TeamMentorExpertiseRequested.create({
        TeamId: teamId,
        expertise: expertise
      })
    )
  }).then(() => {
    return res.redirect(successLink)
  }).catch((err) => {
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
