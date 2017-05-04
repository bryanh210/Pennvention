var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// SponsorAward Routes

// Get all the teams with sponsor awards
router.get('/api/v1/sponsorAwards', function(req, res) {
  models.SponsorAward.findAll().then(function(sponsorAwards) {
    res.json({
      success: true,
      sponsorAwards: sponsorAwards
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teams with sponsor awards for a competition period
router.get('/api/v1/sponsorAwards/competitionPeriod/:competitionPeriod', function(req, res) {
  models.SponsorAward.findAll({
    where: {
      competitionPeriod: req.params.competitionPeriod
    }
  }).then(function(sponsorAwards) {
    res.json({
      success: true,
      sponsorAwards: sponsorAwards
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teams with sponsor awards by their id
router.get('/api/v1/sponsorAwards/:SponsorAwardId', function(req, res) {
  models.SponsorAward.findOne({
    where: {
      id: req.params.SponsorAwardId
    }
  }).then(function(sponsorAwards) {
    if(!sponsorAwards) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      sponsorAwards: sponsorAwards
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Mark a team with a sponsor award
router.post('/api/v1/sponsorAward', function(req, res) {
  models.SponsorAward.create({
    TeamId: req.body.teamId,
    IterationId: req.body.IterationId,
    awardName: req.body.awardName,
    rewardAmount: req.body.rewardAmount
  }).then(function(sponsorAward) {
    res.json({
      success: true,
      sponsorAward: sponsorAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a sponsor award by their ID
router.post('/api/v1/sponsorAward/:SponsorAwardId', function(req, res) {
  models.SponsorAward.update({
    TeamId: req.body.teamId,
    IterationId: req.body.IterationId,
    awardName: req.body.awardName,
    rewardAmount: req.body.rewardAmount
  }, {
    where: {
      id: req.params.SponsorAwardId
    }
  }).then(function(sponsorAward) {
    res.json({
      success: true,
      sponsorAward: sponsorAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a team with a sponsor award
router.delete('/api/v1/sponsorAward/:SponsorAwardId', function(req, res) {
  models.SponsorAward.destroy({
    where: {
      id: req.params.SponsorAwardId
    }
  }).then(function(sponsorAward) {
    res.json({
      success: true,
      sponsorAward: sponsorAward
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
