var models  = require('../models');
var express = require('express');
var router  = express.Router();

// router.use(function(req, res, next){
//   if (!req.user) { //add middleware to check to see if usertype is admin
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

router.get('/admin', function(req, res, next) {
  res.render('admin/home', {
    layout : 'adminLayout'
  });
});

router.get('/admin/index', function(req, res, next) {
  res.render('admin/home', {
    layout : 'adminLayout'
  });
});

router.get('/admin/teams', function(req, res, next) {
  res.render('admin/teams', {
    layout : 'adminLayout'
  });
});

router.get('/admin/mentors', function(req, res, next) {
  res.render('admin/mentors', {
    layout : 'adminLayout'
  });
});

router.get('/admin/judges', function(req, res, next) {
  res.render('admin/judges', {
    layout : 'adminLayout'
  });
});

router.get('/admin/awards', function(req, res, next) {
  res.render('admin/awards', {
    layout : 'adminLayout'
  });
});

router.get('/admin/stages', function(req, res, next) {
  res.render('admin/stages', {
    layout : 'adminLayout'
  });
});
///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
