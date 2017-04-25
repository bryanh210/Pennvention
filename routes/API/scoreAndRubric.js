var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// TeamScore Routes

// Get all the teamScores previously created
router.get('/api/v1/teamScores', function(req, res) {
  models.TeamScore.findAll().then(function(teamScore) {
    res.json({
      success: true,
      teamScores: teamScores
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the teamScores for a team
router.get('/api/v1/teamScore/:TeamId', function(req, res) {
  models.TeamScore.findAll({
    where: {
      TeamId: req.params.TeamId
    }
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

//  Get all the teamScores a judge created
router.get('/api/v1/teamScore/:JudgeId', function(req, res) {
  models.TeamScore.findAll({
    where: {
      JudgeId: req.params.JudgeId
    }
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a teamScore by their ID
router.get('/api/v1/teamScore/:TeamScoreId', function(req, res) {
  models.TeamScore.findAll({
    where: {
      TeamScoreId: req.params.TeamScoreId
    }
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Provide a team teamScore
router.post('/api/v1/teamScore', function(req, res) {
  models.TeamScore.create({
    TeamId: req.body.teamId,
    JudgeId: req.user.id || req.body.JudgeId, // NEED TO FIX THIS
    StageDetailId: req.body.StageDetailId,
    comment: req.body.comment,
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a team teamScore
router.patch('/api/v1/teamScore/:TeamScoreId', function(req, res) {
  models.TeamScore.update({
    TeamId: req.body.teamId,
    JudgeId: req.user.id || req.body.JudgeId, // NEED TO FIX THIS
    StageDetailId: req.body.StageDetailId,
    comment: req.body.comment,
  }, {
    where: {
      TeamScoreId: req.params.TeamScoreId
    }
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

//  Delete a teamScore by their ID
router.delete('/api/v1/teamScore/:TeamScoreId', function(req, res) {
  models.TeamScore.delete({
    where: {
      TeamScoreId: req.params.TeamScoreId
    }
  }).then(function(teamScore) {
    res.json({
      success: true,
      teamScore: teamScore
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Rubric Routes

// Get all the rubrics previously created
router.get('/api/v1/rubrics', function(req, res) {
  models.Rubric.findAll().then(function(rubrics) {
    res.json({
      success: true,
      rubrics: rubrics
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a rubric by their ID
router.get('/api/v1/rubric/:RubricId', function(req, res) {
  models.Rubric.findAll({
    where: {
      TeamRubricId: req.params.RubricId
    }
  }).then(function(rubric) {
    res.json({
      success: true,
      rubric: rubric
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Post a rubric
router.post('/api/v1/rubric', function(req, res) {
  models.Rubric.create({
  }).then(function(rubric) {
    res.json({
      success: true,
      rubric: rubric
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a rubric by their ID
router.post('/api/v1/rubric/:RubricId', function(req, res) {
  models.Rubric.update({
  }, {
    where: {
      RubricId: req.params.RubricId
    }
  }).then(function(rubric) {
    res.json({
      success: true,
      rubric: rubric
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a rubric by their ID
router.delete('/api/v1/rubric/:RubricId', function(req, res) {
  models.Rubric.delete({
    where: {
      RubricId: req.params.RubricId
    }
  }).then(function(rubric) {
    res.json({
      success: true,
      rubric: rubric
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Question Routes

// Get all the questions previously created
router.get('/api/v1/questions', function(req, res) {
  models.Question.findAll().then(function(questions) {
    res.json({
      success: true,
      questions: questions
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the questions for a rubric by RubricId
router.get('/api/v1/questions/:RubricId', function(req, res) {
  models.Question.findAll({
    where: {
    RubricId: req.params.RubricId
    }
  }).then(function(questions) {
    res.json({
      success: true,
      questions: questions
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a question by their ID
router.get('/api/v1/question/:QuestionId', function(req, res) {
  models.Question.findAll({
    where: {
      TeamQuestionId: req.params.QuestionId
    }
  }).then(function(question) {
    res.json({
      success: true,
      question: question
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Post a question
router.post('/api/v1/question', function(req, res) {
  models.Question.create({
    RubricId: req.body.RubricId,
    question: req.body.question,
    maxScore: req.body.maxScore
  }).then(function(question) {
    res.json({
      success: true,
      question: question
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a question by their ID
router.post('/api/v1/question/:QuestionId', function(req, res) {
  models.Question.update({
    RubricId: req.body.RubricId,
    question: req.body.question,
    maxScore: req.body.maxScore
  }, {
    where: {
      QuestionId: req.params.QuestionId
    }
  }).then(function(question) {
    res.json({
      success: true,
      question: question
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a question by their ID
router.delete('/api/v1/question/:QuestionId', function(req, res) {
  models.Question.delete({
    where: {
      QuestionId: req.params.QuestionId
    }
  }).then(function(question) {
    res.json({
      success: true,
      question: question
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Mark Routes

// Get all the marks previously created
router.get('/api/v1/marks', function(req, res) {
  models.Mark.findAll().then(function(marks) {
    res.json({
      success: true,
      marks: marks
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get all the marks for a teamScore by TeamScoreId
router.get('/api/v1/marks/:TeamScoreId', function(req, res) {
  models.Mark.findAll({
    where: {
    TeamScoreId: req.params.TeamScoreId
    }
  }).then(function(marks) {
    res.json({
      success: true,
      marks: marks
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get a mark by their ID
router.get('/api/v1/mark/:MarkId', function(req, res) {
  models.Mark.findAll({
    where: {
      TeamMarkId: req.params.MarkId
    }
  }).then(function(mark) {
    res.json({
      success: true,
      mark: mark
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Post a mark
router.post('/api/v1/mark', function(req, res) {
  models.Mark.create({
    TeamScoreId: req.body.TeamScoreId,
    QuestionId: req.body.QuestionId,
    score: score
  }).then(function(mark) {
    res.json({
      success: true,
      mark: mark
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update a mark by their ID
router.post('/api/v1/mark/:MarkId', function(req, res) {
  models.Mark.update({
    TeamScoreId: req.body.TeamScoreId,
    QuestionId: req.body.QuestionId,
    score: score
  }, {
    where: {
      MarkId: req.params.MarkId
    }
  }).then(function(mark) {
    res.json({
      success: true,
      mark: mark
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a mark by their ID
router.delete('/api/v1/mark/:MarkId', function(req, res) {
  models.Mark.delete({
    where: {
      MarkId: req.params.MarkId
    }
  }).then(function(mark) {
    res.json({
      success: true,
      mark: mark
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
