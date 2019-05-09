
//load bcrypt
var bCrypt = require('bcrypt-nodejs');


module.exports = function (passport, user) {

  var User = user;

  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(function (user) {
      if (user) {
        done(null, user.get());
      }
      else {
        done(user.errors, null);
      }
    });

  });

  passport.use('local-signup', new LocalStrategy(

    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, email, password, done) {

      console.log(email);
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({ where: { email: email } }).then(function (user) {

        if (user) {
          console.log('message', 'That email is already taken.');
          //return done(null, false, { message: 'That email is already taken' });
          return done(null, false, req.flash('lmessage', 'That email is already taken.'));
        }

        else {
          var userPassword = generateHash(password);

          var data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: email,
            password: userPassword,

          }
          User.create(data).then(function (newUser, created) {
            if (!newUser) {

              return done(null, false);
            }
            if (newUser) {
              console.log("new user")
              return done(null, newUser);
            }

          });


        }

      });
    }
  ));

  //local-signin
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
      var User = user;
      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where: { email: email } }).then(function (user) {
        console.log(user);
        if (!user) {
          console.log("no user found");
          return done(null, false, req.flash('message', 'No user found.'));
        }

        if (!isValidPassword(user.password, password)) {

          return done(null, false, req.flash('message', 'Oops! Wrong password.'));
        }

        var userinfo = user.get();

        return done(null, userinfo);

      }).catch(function (err) {
        console.log("Error:", err);
        return done(null, false, req.flash('message', 'Something went wrong with your Signin'));
      });

    }
  ));


}

