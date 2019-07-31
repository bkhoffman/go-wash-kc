const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
const generateHash = require('./hash');
const bcrypt = require('bcrypt');

// Local Sign Up
passport.use('local', new LocalStrategy(
    // Our user will sign in using an email, rather than a 'username'
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {

        // When a user tries to sign in this code runs
        db.Users.findOne({
            where: { email }
        }).then(function(user) {
            // If there's no user with the given email
            if (user && bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            }

            return done(null, false, { msg: 'Invalid credientials' });
        });
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.Users.findByPk(id).then(function(user) {
        if (user) {
            done(null, user);
        } else {
            done(user.errors, null);
        }
    });
});

// Exporting our configured passport
module.exports = passport;