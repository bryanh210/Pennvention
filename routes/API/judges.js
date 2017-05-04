var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// Judge Routes

// Get properties of all judges
router.get('/api/v1/judges', function(req, res) {
  models.Judge.findAll().then(function(judges) {
    res.json({
      success: true,
      judges: judges
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get properties of one judge by their ID
router.get('/api/v1/judge/:JudgeId', function(req, res) {
  models.Judge.findOne({
    where: {
      id: req.params.JudgeId
    }
  }).then(function(judge) {
    if(!judge) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      judge: judge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new judge
router.post('/api/v1/judge/', function(req, res) {
  models.Judge.create({
    id: req.body.id,
    UserId: req.body.UserId, //NOT SURE IF WE WANT TO ALLOW THIS
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    skypeUsername: req.body.skypeUsername,
    biography: req.body.biography,
    approved: false
  }).then(function(judge) {
    res.json({
      success: true,
      judge: judge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Authenticate a judge by their ID. Must be an Admin MIGHT NEED TO MOVE THIS ROUTE INTO ADMINS FOLDER
router.post('/api/v1/judge/approve/:JudgeId', function(req, res) {
  models.Judge.update({
    approved: true
  }, {
    where: {
      id: req.params.JudgeId
    }
  }).then(function(judge) {
    res.json({
      success: true,
      judge: judge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update the properties of a judge by their ID
router.patch('/api/v1/judge/:JudgeId', function(req, res) {
  models.Judge.update({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    skypeUsername: req.body.skypeUsername,
    biography: req.body.biography
  }, {
    where: {
      id: req.params.JudgeId
    }
  }).then(function(judge) {
    res.json({
      success: true,
      judge: judge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a judge by their ID
router.delete('/api/v1/:JudgeId', function(req, res) {
  models.Judge.destroy({
    where: {
      id: req.params.JudgeId
    }
  }).then(function(judge) {
    res.json({
      success: true,
      judge: judge
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// JudgeExpertise Routes

// Get all expertise for all judges
router.get('/api/v1/judges/expertise', function(req, res) {
  models.JudgeExpertise.findAll().then(function(judgesCategories) {
    res.json({
      success: true,
      judgesCategories: judgesCategories
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a expertise by their ID
router.get('/api/v1/judge/expertise/:JudgeExpertiseId', function(req, res) {
  models.JudgeExpertise.findOne({
    where: {
      id: req.params.JudgeExpertiseId
    }
  }).then(function(judgeExpertise) {
    if(!judgeExpertise) {
      res.json({
        success: false,
      })
    }
    res.json({
      success: true,
      judgeExpertise: judgeExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get the expertise for a judge by their ID
router.get('/api/v1/judge/expertises/JudgeId/:JudgeId', function(req, res) {
  models.JudgeExpertise.findAll({
    where: {
      JudgeId: req.params.JudgeId
    }
  }).then(function(judgeCategories) {
    res.json({
      success: true,
      judgeCategories: judgeCategories
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new expertise for a judge by their ID
router.post('/api/v1/judge/expertise', function(req, res) {
  models.JudgeExpertise.create({
    JudgeId: req.query.JudgeId || req.body.JudgeId, //NOT SURE IF WE WANT TO ALLOW THI
    expertise: req.body.expertise
  }).then(function(judgeExpertise) {
    res.json({
      success: true,
      judgeExpertise: judgeExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a expertise for a judge by their ID
router.patch('/api/v1/judge/expertise/:JudgeExpertiseId', function(req, res) {
  models.JudgeExpertise.update({
    expertise: req.body.expertise
  }, {
    where: {
      id: req.params.JudgeExpertiseId
    }
  }).then(function(judgeExpertise) {
    res.json({
      success: true,
      judgeExpertise: judgeExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});


// Delete a expertise by their id
router.delete('/api/v1/judge/expertise/:JudgeExpertiseId', function(req, res) {
  models.JudgeExpertise.destroy({
    where: {
      id: req.params.JudgeExpertiseId
    }
  }).then(function(judgeExpertise) {
    res.json({
      success: true,
      judgeExpertise: judgeExpertise
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
