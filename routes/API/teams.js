var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// Team Routes

// Get properties of all teams
router.get('/api/v1/teams', function(req, res) {
  models.Team.findAll().then(function(teams) {
    res.json({
      success: true,
      teams: teams
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get properties of one team by id
router.get('/api/v1/team/:TeamId', function(req, res) {
  models.Team.findOne({
    where: {
      id: req.params.TeamId
    }
  }).then(function(team) {
    if (!team) {
      req.json({
        success: false
      })
    }
    res.json({
      success: true,
      team: team
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new team
router.post('/api/v1/team', function(req, res) {
  models.Team.create({
    name: req.body.name,
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    deckLink: req.body.slideDeckLink, // MIGHT HAVE TO UPDATE IF WE WANT MULTIPLE LINKS/FILE UPLOAD
    videoLink: req.body.videoLink, // MIGHT HAVE TO UPDATE IF WE WANT MULTIPLE LINKS/FILE UPLOAD
    IterationId: req.body.IterationId || 1
  }).then(function(team) {
    res.json({
      success: true,
      team: team
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update properties of a team by their ID
router.patch('/api/v1/team/:TeamId', function(req, res) {
  models.Team.update({
    name: req.body.name,
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    deckLink: req.body.slideDeckLink,
    videoLink: req.body.videoLink
  }, {
    where: {
      id: req.params.TeamId
    }
  }).then(function(team) {
    res.json({
      success: true,
      team: team
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a team by their id
router.delete('/api/v1/team/:TeamId', function(req, res) {
  models.Team.destroy({
    where: {
      id: req.params.Teamid
    }
  }).then(function(team) {
    res.json({
      success: true,
      team: team
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// TeamLogo Routes

// Get the logo for all teams
router.get('/api/v1/teams/logos', function(req, res) {
  models.TeamLogo.findAll().then(function(teamsLogo) {
    res.json({
      success: true,
      teamsLogo: teamsLogo
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the logo for a team by their ID
router.get('/api/v1/team/logo/:TeamId', function(req, res) {
  models.TeamLogo.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamLogo) {
    res.json({
      success: true,
      teamLogo: teamLogo
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create the logo for a team by their ID
router.post('/api/v1/team/logo', function(req, res) {
  models.TeamLogo.create({
    TeamId: req.body.TeamId, // MIGHT NEED TO CONSIDER HOW TO GET THIS INFORMATION
    logoPicture: req.body.logoPicture
  }).then(function(teamLogo) {
    res.json({
      success: true,
      teamLogo: teamLogo
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update the logo for a team by their ID
router.patch('/api/v1/team/logo/:TeamId', function(req, res) {
  models.TeamLogo.update({
    logoPicture: req.body.logoPicture
  }, {
    where: {
      id: req.params.TeamId
    }
  }).then(function(teamLogo) {
    res.json({
      success: true,
      teamLogo: teamLogo
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a logo for a team by their ID
router.delete('/api/v1/team/:TeamId', function(req, res) {
  models.TeamLogo.destroy({
    where: {
      id: req.params.Teamid
    }
  }).then(function(teamLogo) {
    res.json({
      success: true,
      teamLogo: teamLogo
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// TeamMentorExpertiseRequested Routes

// Get the mentorExpertiseRequested for all teams
router.get('/api/v1/teams/mentorExpertiseRequested', function(req, res) {
  models.TeamMentorExpertiseRequested.findAll().then(function(teamsCategory) {
    res.json({
      success: true,
      teamsCategory: teamsCategory
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the mentorExpertiseRequested for a team by their ID
router.get('/api/v1/team/mentorExpertiseRequested/TeamId/:TeamId', function(req, res) {
  models.TeamMentorExpertiseRequested.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamCategories) {
    res.json({
      success: true,
      teamCategories: teamCategories
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a mentorExpertiseRequested by their ID
router.get('/api/v1/team/mentorExpertiseRequested/:TeamMentorExpertiseRequestedId', function(req, res) {
  models.TeamMentorExpertiseRequested.findOne({
    where: {
      id: req.params.TeamMentorExpertiseRequestedId
    }
  }).then(function(teamMentorExpertiseRequested) {
    if(!teamMentorExpertiseRequested) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      teamMentorExpertiseRequested: teamMentorExpertiseRequested
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a mentorExpertiseRequested for a team by their ID
router.post('/api/v1/team/mentorExpertiseRequested', function(req, res) {
  models.TeamMentorExpertiseRequested.create({
    TeamId: req.body.TeamId, // MIGHT NEED TO CONSIDER HOW TO GET THIS INFORMATION
    expertise: expertise
  }).then(function(teamCategory) {
    res.json({
      success: true,
      teamCategory: teamCategory
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a mentorExpertiseRequested for a team by their ID
router.patch('/api/v1/team/mentorExpertiseRequested/:TeamMentorExpertiseRequestedId', function(req, res) {
  models.TeamMentorExpertiseRequested.update({
    expertise: expertise
  }, {
    where: {
      id: req.params.TeamMentorExpertiseRequestedId
    }
  }).then(function(teamCategory) {
    res.json({
      success: true,
      teamCategory: teamCategory
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a mentorExpertiseRequested for a team by their ID
router.delete('/api/v1/team/:TeamMentorExpertiseRequestedId', function(req, res) {
  models.TeamMentorExpertiseRequested.destroy({
    where: {
      i: req.params.TeamMentorExpertiseRequestedid
    }
  }).then(function(teamCategory) {
    res.json({
      success: true,
      teamCategory: teamCategory
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// TeamStrength Routes

// Get the strength for all teams
router.get('/api/v1/teams/strengths', function(req, res) {
  models.TeamStrength.findAll().then(function(teamsStrength) {
    res.json({
      success: true,
      teamsStrength: teamsStrength
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the strengths for a team by their ID
router.get('/api/v1/team/strengths/TeamId/:TeamId', function(req, res) {
  models.TeamStrength.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamStrengths) {
    res.json({
      success: true,
      teamStrengths: teamStrengths
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a strength by their ID
router.get('/api/v1/team/strengths/:TeamStrengthId', function(req, res) {
  models.TeamStrength.findOne({
    where: {
      id: req.params.TeamStrengthId
    }
  }).then(function(teamStrength) {
    if(!teamStrength) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      teamStrength: teamStrength
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a strength for a team by their ID
router.post('/api/v1/team/strength', function(req, res) {
  models.TeamStrength.create({
    TeamId: req.body.TeamId, // MIGHT NEED TO CONSIDER HOW TO GET THIS INFORMATION
    strength: req.body.strength
  }).then(function(teamStrength) {
    res.json({
      success: true,
      teamStrength: teamStrength
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a strength for a team by their ID
router.patch('/api/v1/team/strength/:TeamStrengthId', function(req, res) {
  models.TeamStrength.update({
    strength: req.body.strength
  }, {
    where: {
      id: req.params.TeamStrengthId
    }
  }).then(function(teamStrength) {
    res.json({
      success: true,
      teamStrength: teamStrength
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a strength for a team by their ID
router.delete('/api/v1/team/:TeamStrengthId', function(req, res) {
  models.TeamStrength.destroy({
    where: {
      id: req.params.TeamStrengthid
    }
  }).then(function(teamStrength) {
    res.json({
      success: true,
      teamStrength: teamStrength
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// TeamWeakness Routes

// Get the weakness for all teams
router.get('/api/v1/teams/weaknesses', function(req, res) {
  models.TeamWeakness.findAll().then(function(teamsWeakness) {
    res.json({
      success: true,
      teamsWeakness: teamsWeakness
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the weaknesses for a team by their ID
router.get('/api/v1/team/weaknesses/TeamId/:TeamId', function(req, res) {
  models.TeamWeakness.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamWeaknesses) {
    res.json({
      success: true,
      teamWeaknesses: teamWeaknesses
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a weakness by their ID
router.get('/api/v1/team/weaknesses/:TeamWeaknessId', function(req, res) {
  models.TeamWeakness.findOne({
    where: {
      id: req.params.TeamWeaknessId
    }
  }).then(function(teamWeakness) {
    if(!teamWeakness) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      teamWeakness: teamWeakness
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a weakness for a team by their ID
router.post('/api/v1/team/weakness', function(req, res) {
  models.TeamWeakness.create({
    TeamId: req.body.TeamId, // MIGHT NEED TO CONSIDER HOW TO GET THIS INFORMATION
    weakness: req.body.weakness
  }).then(function(teamWeakness) {
    res.json({
      success: true,
      teamWeakness: teamWeakness
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a weakness for a team by their ID
router.patch('/api/v1/team/weakness/:TeamWeaknessId', function(req, res) {
  models.TeamWeakness.update({
    weakness: req.body.weakness
  }, {
    where: {
      id: req.params.TeamWeaknessId
    }
  }).then(function(teamWeakness) {
    res.json({
      success: true,
      teamWeakness: teamWeakness
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a weakness for a team by their ID
router.delete('/api/v1/team/:TeamWeaknessId', function(req, res) {
  models.TeamWeakness.destroy({
    where: {
      id: req.params.TeamWeaknessid
    }
  }).then(function(teamWeakness) {
    res.json({
      success: true,
      teamWeakness: teamWeakness
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
