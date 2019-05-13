
// Bring in User Model
let db = require('../../models');

// Register Form

module.exports = function (app, passport) {

  // app.get('/', function (req, res) {
  //   // res.render('signin');
  //   res.render('signin');
  // });


  // Use this route to verify the user is authenticated 
  // and get credentials. AKA if req.user, you have a session
  app.get('/user', (req, res, next) => {
    if (req.user) {
      return res.status(200).json({
        user: req.user,
        authenticated: true
      });
    } else {
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false
      });
    }
  });


  // app.post('/signin', passport.authenticate('local-signin', {
  //   successRedirect: '/UserPage',
  //   failureRedirect: '/',
  //   failureFlash: true
  // }
  // ));
 
  app.post('/register', passport.authenticate('local-signup'), (req, res, next) => {
		console.log('/login handler');
		req.session.save((err) => {
				if (err) {
						return next(err);
				}

				res.status(200).send('OK');
		});
});

  app.post('/', passport.authenticate('local-signin'), (req, res, next) => {
		console.log('/login handler');
		req.session.save((err) => {
				if (err) {
						return next(err);
				}

				res.status(200).send('OK');
		});
});

  // // Register Proccess
  // app.post('/register', passport.authenticate('local-signup', {
  //   successRedirect: '/',
  //   failureRedirect: '/register',
  //   failureFlash: true
  // }
  // ));

  // app.post('/signin', passport.authenticate('local-signin', {
  //   successRedirect: '/UserPage',
  //   failureRedirect: '/',
  //   failureFlash: true
  // }
  // ));

  // app.get('/logout', function (req, res) {
  //   req.session.destroy(function (err) {
  //     req.flash('success', 'You are logged out');
  //     res.redirect('/signin');
  //   });
  // });

  app.get('/logout', (req, res, next) => {
		req.logout();
		req.session.save((err) => {
				if (err) {
						return next(err);
				}
				res.status(200).send('OK');
		});
});

// Use this to test that your API is working
app.get('/ping', (req, res) => {
		res.status(200).send("pong!");
});



}




