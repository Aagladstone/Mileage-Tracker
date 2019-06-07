var passport = require('passport');

var User = require('../models').User;

const LocalStrategy = require('./localStrategy')

passport.serializeUser(function (user, done) {
	done(null, user.id);
});
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

passport.use(LocalStrategy)

module.exports = passport
