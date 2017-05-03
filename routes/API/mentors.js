var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// Mentor Routes

// Get properties of all mentors
router.get('/api/v1/mentors', function(req, res) {
  models.Mentor.findAll().then(function(mentors) {
    res.json({
      success: true,
      mentors: mentors
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get properties of one mentor by their ID
router.get('/api/v1/mentor/:MentorId', function(req, res) {
  models.Mentor.findAll({
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(mentor) {
    res.json({
      success: true,
      mentor: mentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new mentor
router.post('/api/v1/mentor/', function(req, res) {
  models.Mentor.create({
    MentorId: req.body.UserId,
    UserId: req.body.UserId || req.params.UserId, //NOT SURE IF WE WANT TO ALLOW THIS
    firstName: req.body.firstName || '',
    lastName: req.body.lastName || '',
    phoneNumber: req.body.phoneNumber || '',
    skypeUsername: req.body.skypeUsername || '',
    biography: req.body.biography || '',
    approved: false
  }).then(function(mentor) {
    res.json({
      success: true,
      mentor: mentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Authenticate a mentor by their ID. Must be an Admin MIGHT NEED TO MOVE THIS ROUTE INTO ADMINS FOLDER
router.post('/api/v1/mentor/approve/:MentorId', function(req, res) {
  models.Mentor.update({
    approved: true
  }, {
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(mentor) {
    res.json({
      success: true,
      mentor: mentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update the properties of a mentor by their ID
router.patch('/api/v1/mentor/:MentorId', function(req, res) {
  models.Mentor.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    skypeUsername: req.body.skypeUsername,
    biography: req.body.biography
  }, {
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(mentor) {
    res.json({
      success: true,
      mentor: mentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a mentor by their ID
router.delete('/api/v1/:MentorId', function(req, res) {
  models.Mentor.destroy({
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(mentor) {
    res.json({
      success: true,
      mentor: mentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// MentorExpertise Routes

// Get all expertise for all mentors
router.get('/api/v1/mentors/expertise', function(req, res) {
  models.MentorExpertise.findAll().then(function(mentorsCategories) {
    res.json({
      success: true,
      mentorsCategories: mentorsCategories
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a expertise by their ID
router.get('/api/v1/mentor/expertise/:MentorExpertiseId', function(req, res) {
  models.MentorExpertise.findAll({
    where: {
      MentorExpertiseId: req.params.MentorExpertiseId
    }
  }).then(function(mentorExpertise) {
    res.json({
      success: true,
      mentorExpertise: mentorExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the expertise for a mentor by their ID
router.get('/api/v1/mentor/expertise/:MentorId', function(req, res) {
  models.MentorExpertise.findAll({
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(mentorCategories) {
    res.json({
      success: true,
      mentorCategories: mentorCategories
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new expertise for a mentor by their ID
router.post('/api/v1/mentor/expertise', function(req, res) {
  models.MentorExpertise.create({
    MentorId: req.user.id || req.params.MentorId, //NOT SURE IF WE WANT TO ALLOW THI
    expertise: req.body.expertise
  }).then(function(mentorExpertise) {
    res.json({
      success: true,
      mentorExpertise: mentorExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a expertise for a mentor by their ID
router.patch('/api/v1/mentor/expertise/:MentorExpertiseId', function(req, res) {
  models.MentorExpertise.update({
    expertise: req.body.expertise
  }, {
    where: {
      MentorExpertiseId: req.params.MentorExpertiseId
    }
  }).then(function(mentorExpertise) {
    res.json({
      success: true,
      mentorExpertise: mentorExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});


// Delete a expertise by their id
router.delete('/api/v1/mentor/expertise/:MentorExpertiseId', function(req, res) {
  models.MentorExpertise.destroy({
    where: {
      MentorExpertiseId: req.params.MentorExpertiseId
    }
  }).then(function(mentorExpertise) {
    res.json({
      success: true,
      mentorExpertise: mentorExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
