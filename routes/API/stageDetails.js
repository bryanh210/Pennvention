var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// Iteration Routes

// Get all the iterations
router.get('/api/v1/iterations', function(req, res) {
  models.Iteration.findAll().then(function(iterations) {
    res.json({
      success: true,
      iterations: iterations
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get all the iterations for a specified competition period
router.get('/api/v1/iteration/competitonPeriod/:competitionPeriod', function(req, res) {
  models.Iteration.findAll({
    where: {
      competitionPeriod: req.params.competitionPeriod
    }
  }).then(function(iteration) {
    res.json({
      success: true,
      iteration: iteration
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get an iteration by their ID
router.get('/api/v1/iteration/:IterationId', function(req, res) {
  models.Iteration.findAll({
    where: {
      id: req.params.IterationId
    }
  }).then(function(iteration) {
    res.json({
      success: true,
      iteration: iteration
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Create a new iteration
router.post('api/v1/iteration', function(req, res) {
  models.Iteration.create({
    competitionPeriod: req.body.competitionPeriod
  }).then(function(iteration) {
    res.json({
      success: true,
      iteration: iteration
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update an iteration by their ID
router.patch('api/v1/iteration/:IterationId', function(req, res) {
  models.Iteration.update({
    competitionPeriod: req.body.competitionPeriod
  }, {
    where: {
      id: req.params.IterationId
    }
  }).then(function(iteration) {
    res.json({
      success: true,
      iteration: iteration
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});


// Delete an iteration by their ID
router.delete('/api/v1/iteration/:IterationId', function(req, res) {
  models.Iteration.destroy({
    where: {
      i: req.params.IterationId
    }
  }).then(function(iteration) {
    res.json({
      success: true,
      iteration: iteration
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Stage Routes

// Get all the stages
router.get('/api/v1/stages', function(req, res) {
  models.Stage.findAll().then(function(stages) {
    res.json({
      success: true,
      stages: stages
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get all the stages by their iteration
router.get('/api/v1/stages/IterationId/:IterationId', function(req, res) {
  models.Stage.findAll({
    where: {
      IterationId: req.params.IterationId
    }
  }).then(function(stages) {
    res.json({
      success: true,
      stages: stages
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get a stage by their ID
router.get('/api/v1/stage/:StageId', function(req, res) {
  models.Stage.findAll({
    where: {
      id: req.params.StageId
    }
  }).then(function(stage) {
    res.json({
      success: true,
      stage: stage
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Create a new stage
router.post('/api/v1/stage', function(req, res) {
  models.Stage.create({
    IterationId: req.body.IterationId,
    name: req.body.name,
    dateToRevealInformation: req.body.dateToRevealInformation,
    RubricId: req.body.RubricId
  }).then(function(stage) {
    res.json({
      success: true,
      stage: stage
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Update a stage by their ID
router.patch('/api/v1/stage/:StageId', function(req, res) {
  models.Stage.update({
    IterationId: req.body.IterationId,
    name: req.body.name,
    dateToRevealInformation: req.body.dateToRevealInformation,
    RubricId: req.body.RubricId
  }, {
    where: {
      id: req.params.StageId
    }
  }).then(function(stage) {
    res.json({
      success: true,
      stage: stage
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Delete a stage by their ID
router.patch('/api/v1/stage/:StageId', function(req, res) {
  models.Stage.destroy({
    where: {
      id: req.params.StageId
    }
  }).then(function(stage) {
    res.json({
      success: true,
      stage: stage
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// QualifyingTeam Routes

// Get all the QualifyingTeams
router.get('/api/v1/qualifyingTeams', function(req, res) {
  models.QualifyingTeam.findAll().then(function(qualifyingTeams) {
    res.json({
      success: true,
      qualifyingTeams: qualifyingTeams
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get all the QualifyingTeams by the StageId
router.get('/api/v1/qualifyingTeams/StageId/:StageId', function(req, res) {
  models.QualifyingTeam.findAll({
    where:{
      StageId: req.params.StageId
    }
  }).then(function(qualifyingTeams) {
    res.json({
      success: true,
      qualifyingTeams: qualifyingTeams
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Get a qualifying team by their ID
router.get('/api/v1/qualifyingTeam/:QualifyingTeamId', function(req, res) {
  models.QualifyingTeam.findAll({
    where:{
      id: req.params.QualifyingTeamId
    }
  }).then(function(qualifyingTeam) {
    res.json({
      success: true,
      qualifyingTeam: qualifyingTeam
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Create a new qualifying team
router.post('/api/v1/qualifyingTeams', function(req, res) {
  models.QualifyingTeam.create({
    TeamId: req.body.TeamId,
    StageId: req.body.StageId
  }).then(function(qualifyingTeam) {
    res.json({
      success: true,
      qualifyingTeam: qualifyingTeam
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

// Delete a qualifying team by their ID
router.post('/api/v1/qualifyingTeams/:QualifyingTeamId', function(req, res) {
  models.QualifyingTeam.destroy({
    where: {
      id: req.params.QualifyingTeamId
    }
  }).then(function(qualifyingTeam) {
    res.json({
      success: true,
      qualifyingTeam: qualifyingTeam
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  })
});

module.exports = router;
