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
  models.Student.findOne({
    where: {
      id: req.params.StudentId
    }
  }).then(function(student) {
    if(!student) {
      res.json({
        success: false,
      })
    }
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
    id: req.body.id,
    UserId: req.body.UserId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    skypeUsername: req.body.skypeUsername,
    typeOfStudent: req.body.typeOfStudent,
    school: req.body.school,
    expectedYearOfGraduation: req.body.expectedYearOfGraduation,
    TeamId: req.body.TeamId
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
      id: req.params.StudentId
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
      id: req.params.StudentId
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
      id: req.params.StudentMajorId
    }
  }).then(function(studentMajor) {
    if(!studentMajor) {
      res.json({
        success: false,
      })
    }
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
router.get('/api/v1/student/majors/StudentId/:StudentId', function(req, res) {
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
    StudentId: req.query.StudentId || req.body.StudentId, //NOT SURE IF WE WANT TO ALLOW THIS
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
      id: req.params.StudentMajorId
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
      id: req.params.StudentMajorId
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

// Delete all majors for a student by their id
router.delete('/api/v1/student/majors/StudentId/:StudentId', function(req, res) {
  models.StudentMajor.destroy({
    where: {
      StudentId: req.params.StudentId
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

// StudentSchool Routes

// Get all schools for all students
router.get('/api/v1/students/schools', function(req, res) {
  models.StudentSchool.findAll().then(function(studentsSchools) {
    res.json({
      success: true,
      studentsSchools: studentsSchools
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a school by their ID
router.get('/api/v1/student/school/:StudentSchoolId', function(req, res) {
  models.StudentSchool.findAll({
    where: {
      id: req.params.StudentSchoolId
    }
  }).then(function(studentSchool) {
    if(!studentSchool) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      studentSchool: studentSchool
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the schools for a student by their ID
router.get('/api/v1/student/schools/StudentId/:StudentId', function(req, res) {
  models.StudentSchool.findAll({
    where: {
      StudentId: req.params.StudentId
    }
  }).then(function(studentSchools) {
    res.json({
      success: true,
      studentSchools: studentSchools
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new school for a student by their ID
router.post('/api/v1/student/school', function(req, res) {
  models.StudentSchool.create({
    StudentId: req.query.StudentId || req.body.StudentId, //NOT SURE IF WE WANT TO ALLOW THIS
    school: req.body.school
  }).then(function(studentSchool) {
    res.json({
      success: true,
      studentSchool: studentSchool
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a school for a student by their ID
router.patch('/api/v1/student/school/:StudentSchoolId', function(req, res) {
  models.StudentSchool.update({
    school: req.body.school
  }, {
    where: {
      id: req.params.StudentSchoolId
    }
  }).then(function(studentSchool) {
    res.json({
      success: true,
      studentSchool: studentSchool
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});


// Delete a school by their id
router.delete('/api/v1/student/school/:StudentSchoolId', function(req, res) {
  models.StudentSchool.destroy({
    where: {
      id: req.params.StudentSchoolId
    }
  }).then(function(studentSchool) {
    res.json({
      success: true,
      studentSchool: studentSchool
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete all schools for a student by their id
router.delete('/api/v1/student/schools/StudentId/:StudentId', function(req, res) {
  models.StudentSchool.destroy({
    where: {
      StudentId: req.params.StudentId
    }
  }).then(function(studentSchool) {
    res.json({
      success: true,
      studentSchool: studentSchool
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
