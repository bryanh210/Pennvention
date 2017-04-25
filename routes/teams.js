var models  = require('../models');
var express = require('express');
var router  = express.Router();

// Team Routes

// Get all registered teams info in PennVention 
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
  models.Team.findAll({
    where: {
      TeamId: req.params.TeamId
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

// Create a new team
router.post('/api/v1/team', function(req, res) {
  models.Team.create({
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    slideDeckLink: req.body.slideDeckLink, // MIGHT HAVE TO UPDATE IF WE WANT MULTIPLE LINKS/FILE UPLOAD
    videoLink: req.body.videoLink // MIGHT HAVE TO UPDATE IF WE WANT MULTIPLE LINKS/FILE UPLOAD
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
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    slideDeckLink: req.body.slideDeckLink,
    videoLink: req.body.videoLink
  }, {
    where: {
      TeamId: req.params.TeamId
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
  models.Team.delete({
    where: {
      TeamId: req.params.Teamid
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
    logo: req.body.logo
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
    logo: req.body.logo
  }, {
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

// Delete a logo for a team by their ID
router.delete('/api/v1/team/:TeamId', function(req, res) {
  models.TeamLogo.delete({
    where: {
      TeamId: req.params.Teamid
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

// TeamCategory Routes

// Get the category for all teams
router.get('/api/v1/teams/categories', function(req, res) {
  models.TeamCategory.findAll().then(function(teamsCategory) {
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

// Get the categories for a team by their ID
router.get('/api/v1/team/categories/:TeamId', function(req, res) {
  models.TeamCategory.findAll({
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

// Get a category by their ID
router.get('/api/v1/team/categories/:TeamCategoryId', function(req, res) {
  models.TeamCategory.findAll({
    where: {
      TeamCategoryId: req.params.TeamCategoryId
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

// Create a category for a team by their ID
router.post('/api/v1/team/category', function(req, res) {
  models.TeamCategory.create({
    TeamId: req.body.TeamId, // MIGHT NEED TO CONSIDER HOW TO GET THIS INFORMATION
    category: req.body.category
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

// Update a category for a team by their ID
router.patch('/api/v1/team/category/:TeamCategoryId', function(req, res) {
  models.TeamCategory.update({
    category: req.body.category
  }, {
    where: {
      TeamCategoryId: req.params.TeamCategoryId
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

// Delete a category for a team by their ID
router.delete('/api/v1/team/:TeamCategoryId', function(req, res) {
  models.TeamCategory.delete({
    where: {
      TeamCategoryId: req.params.TeamCategoryid
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

// TeamStrength ROutes

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
router.get('/api/v1/team/strengths/:TeamId', function(req, res) {
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
  models.TeamStrength.findAll({
    where: {
      TeamStrengthId: req.params.TeamStrengthId
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
      TeamStrengthId: req.params.TeamStrengthId
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
  models.TeamStrength.delete({
    where: {
      TeamStrengthId: req.params.TeamStrengthid
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
router.get('/api/v1/team/weaknesses/:TeamId', function(req, res) {
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
  models.TeamWeakness.findAll({
    where: {
      TeamWeaknessId: req.params.TeamWeaknessId
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
      TeamWeaknessId: req.params.TeamWeaknessId
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
  models.TeamWeakness.delete({
    where: {
      TeamWeaknessId: req.params.TeamWeaknessid
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