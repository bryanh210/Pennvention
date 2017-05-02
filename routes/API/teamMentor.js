var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// TeamMentor Routes

// Get all mentors for all teams
router.get('/api/v1/teams/mentors', function(req, res) {
  models.TeamMentor.findAll().then(function(teamsMentors) {
    res.json({
      success: true,
      teamsMentors: teamsMentors
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the mentors for a team by their ID
router.get('/api/v1/team/mentors/:TeamId', function(req, res) {
  models.Mentor.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamMentors) {
    res.json({
      success: true,
      teamMentors: teamMentors
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teams for a mentor by their ID
router.get('/api/v1/teams/mentor/:MentorId', function(req, res) {
  models.Mentor.findAll({
    where: {
      MentorId: req.params.MentorId
    }
  }).then(function(teamsMentor) {
    res.json({
      success: true,
      teamsMentor: teamsMentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new mentor
router.post('/api/v1/team/mentor/', function(req, res) {
  models.TeamMentor.create({
    TeamId: req.body.TeamId,
    MentorId: req.body.MentorId
  }).then(function(teamMentor) {
    res.json({
      success: true,
      teamMentor: teamMentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a mentor by their ID
router.delete('/api/v1/team/mentor/:TeamMentorId', function(req, res) {
  models.Mentor.destroy({
    where: {
      TeamMentorId: req.params.TeamMentorId
    }
  }).then(function(teamMentor) {
    res.json({
      success: true,
      teamMentor: teamMentor
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
