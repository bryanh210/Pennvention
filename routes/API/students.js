var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// Student Routes

// Get properties of all students
router.get('/api/v1/students', function(req, res) {
  models.Student.findAll().then(function(students) {
    res.json({
      success: true,
      students: students
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get properties of one student by their ID
router.get('/api/v1/student/:StudentId', function(req, res) {
  models.Student.findAll({
    where: {
      StudentId: req.params.StudentId
    }
  }).then(function(student) {
    res.json({
      success: true,
      student: student
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new student
router.post('/api/v1/student/', function(req, res) {
  models.Student.create({
    StudentID: req.user.UserId,
    UserId: req.user.UserId,
    firstName: req.body.firstName || '',
    lastName: req.body.lastName || '',
    phoneNumber: req.body.phoneNumber || '',
    skypeUsername: req.body.skypeUsername || '',
    typeOfStudent: req.body.typeOfStudent || '',
    school: req.body.school || '',
    expectedYearOfGraduation: req.body.expectedYearOfGraduation || '',
    TeamId: null
  }).then(function(student) {
    res.json({
      success: true,
      student: student
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update the properties of a student by their ID
router.patch('/api/v1/student/:StudentId', function(req, res) {
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
      StudentId: req.params.StudentId
    }
  }).then(function(student) {
    res.json({
      success: true,
      student: student
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a student by their ID
router.delete('/api/v1/:StudentId', function(req, res) {
  models.Student.destroy({
    where: {
      StudentId: req.params.StudentId
    }
  }).then(function(student) {
    res.json({
      success: true,
      student: student
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// StudentMajor Routes

// Get all majors for all students
router.get('/api/v1/students/majors', function(req, res) {
  models.StudentMajor.findAll().then(function(studentsMajors) {
    res.json({
      success: true,
      studentsMajors: studentsMajors
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a major by their ID
router.get('/api/v1/student/major/:StudentMajorId', function(req, res) {
  models.StudentMajor.findAll({
    where: {
      StudentMajorId: req.params.StudentMajorId
    }
  }).then(function(studentMajor) {
    res.json({
      success: true,
      studentMajor: studentMajor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the majors for a student by their ID
router.get('/api/v1/student/majors/:StudentId', function(req, res) {
  models.StudentMajor.findAll({
    where: {
      StudentId: req.params.StudentId
    }
  }).then(function(studentMajors) {
    res.json({
      success: true,
      studentMajors: studentMajors
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new major for a student by their ID
router.post('/api/v1/student/major', function(req, res) {
  models.StudentMajor.create({
    StudentId: req.user.id || req.body.StudentId, //NOT SURE IF WE WANT TO ALLOW THIS
    major: req.body.major
  }).then(function(studentMajor) {
    res.json({
      success: true,
      studentMajor: studentMajor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a major for a student by their ID
router.patch('/api/v1/student/major/:StudentMajorId', function(req, res) {
  models.StudentMajor.update({
    major: req.body.major
  }, {
    where: {
      StudentMajorId: req.params.StudentMajorId
    }
  }).then(function(studentMajor) {
    res.json({
      success: true,
      studentMajor: studentMajor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});


// Delete a major by their id
router.delete('/api/v1/student/major/:StudentMajorId', function(req, res) {
  models.StudentMajor.destroy({
    where: {
      StudentMajorId: req.params.StudentMajorId
    }
  }).then(function(studentMajor) {
    res.json({
      success: true,
      studentMajor: studentMajor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
