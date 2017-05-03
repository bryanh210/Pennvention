var models  = require('../../models');
var express = require('express');
var router  = express.Router();

// User Routes

// Get properties of all users
router.get('/api/v1/users', function(req, res) {
  models.User.findAll().then(function(users) {
    res.json({
      success: true,
      users: users
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Get properties of one user by their ID
router.get('/api/v1/user/:UserId', function(req, res) {
  models.User.findAll({
    where: {
      id: req.params.UserId
    }
  }).then(function(user) {
    res.json({
      success: true,
      user: user
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Create a new user
router.post('/api/v1/user/', function(req, res) {
  models.User.create({
    email: req.body.email,
    hash: req.body.hash,
    salt: req.body.salt,
    role: req.body.role
  }).then(function(user) {
    res.json({
      success: true,
      user: user
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Update the properties of a user by their ID
router.patch('/api/v1/user/:UserId', function(req, res) {
  models.User.update({
    email: req.body.email,
    hash: req.body.hash,
    salt: req.body.salt,
    role: req.body.role
  }, {
    where: {
      id: req.params.UserId
    }
  }).then(function(user) {
    res.json({
      success: true,
      user: user
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

// Delete a user by their ID
router.delete('/api/v1/user/:UserId', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.UserId
    }
  }).then(function(user) {
    res.json({
      success: true,
      user: user
    })
  }).catch(function(err) {
    res.json({
      success: false,
      error: err
    })
  });
});

module.exports = router;
