<<<<<<< HEAD
var User  = require('../models').User;
=======
var User = require('../models').User;
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
var LocalStrategy = require('passport-local').Strategy
var bCrypt = require('bcrypt-nodejs');


var strategy = new LocalStrategy(
<<<<<<< HEAD
	{
		usernameField: 'email',
		// passwordField: 'password',
		// passReqToCallback: true // allows us to pass back the entire request to the callback
	},

    function(email, password, done) {

        console.log(email);
        console.log(password);
        User.findOne({  where: {email: email}}). then(function (user) {
   
            console.log(user);
		
            var isValidPassword = function (userpass, password) {
                				return bCrypt.compareSync(password, userpass);
                			}
            if (!user) {
                console.log("no user found");
				return done(null, false, { message: 'Incorrect email' })
            }
            
				if (!isValidPassword(user.password, password)) {
                    console.log("invalid password");
					return done(null, false, { message: 'Oops! Wrong password.' });
				}
               var userinfo = user.get();
               console.log(userinfo)
	            return done(null, userinfo);
        

            })
        }
=======
    {
        usernameField: 'email',
        // passwordField: 'password',
        // passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (email, password, done) {

        console.log(email);
        console.log(password);
        User.findOne({ where: { email: email } }).then(function (user) {

            console.log(user);

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            if (!user) {
                console.log("no user found");
                return done(null, false, { message: 'Incorrect email' })
            }

            if (!isValidPassword(user.password, password)) {
                console.log("invalid password");
                return done(null, false, { message: 'Oops! Wrong password.' });
            }
            var userinfo = user.get();
            console.log(userinfo)
            return done(null, userinfo, { message: 'user found' });


        })
    }
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
)



<<<<<<< HEAD
 module.exports = strategy;
=======
module.exports = strategy;
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
