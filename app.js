var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var auth = require('./routes/auth');
var bcrypt = require('bcrypt');

var model = require('./models');
var config = require('./config.js');

// Connect routes for different user types.
var routes = require('./routes/index');
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var judge = require('./routes/judge');
var mentor = require('./routes/mentor');
var student = require('./routes/student');

// Connect routes to access and modify database.
var APIjudges = require('./routes/API/judges')
var APImentors = require('./routes/API/mentors')
var APIscoreAndRubric = require('./routes/API/scoreAndRubric')
var APIsponsorAwards = require('./routes/API/sponsorAwards')
var APIstageDetails = require('./routes/API/stageDetails')
var APIstudents = require('./routes/API/students')
var APIteamJudge = require('./routes/API/teamJudge')
var APIteamMentor = require('./routes/API/teamMentor')
var APIteams = require('./routes/API/teams')
var APItechAwards = require('./routes/API/techAwards')
var APIusers = require('./routes/API/users')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// handlebars setup
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));


//multiple LocalStrategies for Users, Mentors, Judges and Admins

passport.use(new LocalStrategy({
  usernameField: 'loginEmail',
  passwordField: 'loginPassword'
}, function(username, password, done) {
  console.log("Using LocalStrategy");
  model.User.findOne({
    where: {
      email: username
    }
  }).then(function(user) {
    if (user == null) {
      console.log('test')
      return done(null, false, {
        message: 'Incorrect credentials.'
      })
    }

    var hashedPassword = bcrypt.hashSync(password, user.salt);

    if (user.hash === hashedPassword) {
      console.log("correct password, logging in");
      return done(null, user)
    } else {
      console.log("incorrect password");
    }

    return done(null, false, {
      message: 'Incorrect credentials.'
    })
  })
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  model.User.findOne({where:{id: id}}).then(function (user) {
    console.log(user);
    if (user == null) {
      done(new Error('Wrong user id.'))
    }
    done(null, user)
  });
});

// Mount middleware to access user pages.
app.use('/', routes);
app.use('/', auth(passport));
app.use('/', admin);
app.use('/', judge);
app.use('/', mentor);
app.use('/', student);

// Mount middleware to access API calls to databasel.
app.use('/', APIjudges);
app.use('/', APImentors);
app.use('/', APIscoreAndRubric);
app.use('/', APIsponsorAwards);
app.use('/', APIstageDetails);
app.use('/', APIstudents);
app.use('/', APIteamJudge);
app.use('/', APIteamMentor);
app.use('/', APIteams);
app.use('/', APItechAwards);
app.use('/', APIusers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
