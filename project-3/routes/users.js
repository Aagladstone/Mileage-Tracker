

// Bring in User Model
let db = require('../models');

// Register Form

module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    // res.render('signin');
    res.render('signin');
  });

  app.get('/register', function (req, res) {
    res.render('register');
  });


  // Register Proccess
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
  }
  ));

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/UserPage',
    failureRedirect: '/',
    failureFlash: true
  }
  ));

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      req.flash('success', 'You are logged out');
      res.redirect('/signin');
    });
  });
}
