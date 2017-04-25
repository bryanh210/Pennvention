var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// TechAward Routes

// Get all the teams with tech awards
router.get('/api/v1/techAwards', function(req, res) {
  models.TechAward.findAll().then(function(techAwards) {
    res.json({
      success: true,
      techAwards: techAwards
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teams with tech awards for a competition period
router.get('/api/v1/techAwards/:competitionPeriod', function(req, res) {
  models.TechAward.findAll({
    where: {
      competitionPeriod: req.params.competitionPeriod
    }
  }).then(function(techAwards) {
    res.json({
      success: true,
      techAwards: techAwards
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Mark a team with a tech award
router.post('/api/v1/techAward', function(req, res) {
  models.TechAward.create({
    TeamId: req.body.teamId,
    IterationId: req.body.IterationId,
    awardName: req.body.awardName,
    rewardAmount: req.body.rewardAmount
  }).then(function(techAward) {
    res.json({
      success: true,
      techAward: techAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a tech award by their ID
router.post('/api/v1/techAward/:TechAwardId', function(req, res) {
  models.TechAward.update({
    TeamId: req.body.teamId,
    IterationId: req.body.IterationId,
    awardName: req.body.awardName,
    rewardAmount: req.body.rewardAmount
  }, {
    where: {
      TechAwardId: req.params.TechAwardId
    }
  }).then(function(techAward) {
    res.json({
      success: true,
      techAward: techAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a team with a tech award
router.delete('/api/v1/techAward/:TechAwardId', function(req, res) {
  models.TechAward.delete({
    where: {
      TechAwardId: req.params.TechAwardId
    }
  }).then(function(techAward) {
    res.json({
      success: true,
      techAward: techAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
