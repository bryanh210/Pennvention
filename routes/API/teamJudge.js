var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// TeamJudge Routes

// Get all judges for all teams
router.get('/api/v1/teams/judges', function(req, res) {
  models.TeamJudge.findAll().then(function(teamsJudges) {
    res.json({
      success: true,
      teamsJudges: teamsJudges
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the judges for a team by their ID
router.get('/api/v1/team/judges/TeamId/:TeamId', function(req, res) {
  models.TeamJudge.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamJudges) {
    res.json({
      success: true,
      teamJudges: teamJudges
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teams for a judge by their ID
router.get('/api/v1/teams/judge/JudgeId/:JudgeId', function(req, res) {
  models.TeamJudge.findAll({
    where: {
      JudgeId: req.params.JudgeId
    }
  }).then(function(teamsJudge) {
    res.json({
      success: true,
      teamsJudge: teamsJudge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Geta teamJudge by their ID
router.get('/api/v1/team/judge/:TeamJudgeId', function(req, res) {
  models.TeamJudge.findAll({
    where: {
      id: req.params.TeamJudgeId
    }
  }).then(function(teamsJudge) {
    if(!teamsJudge) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      teamsJudge: teamsJudge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new team/judge pair
router.post('/api/v1/team/judge/', function(req, res) {
  models.TeamJudge.create({
    TeamId: req.body.TeamId,
    JudgeId: req.body.JudgeId
  }).then(function(teamJudge) {
    res.json({
      success: true,
      teamJudge: teamJudge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a team/judge pair by their ID
router.delete('/api/v1/team/judge/:TeamJudgeId', function(req, res) {
  models.Judge.destroy({
    where: {
      id: req.params.TeamJudgeId
    }
  }).then(function(teamJudge) {
    res.json({
      success: true,
      teamJudge: teamJudge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
