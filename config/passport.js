const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
const generateHash = require('./hash');

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
            where: {
                email: email
            }
        }).then(function(user) {
            // If there's no user with the given email
            if (user) {
                return done(null, false, {
                    message: "That email is already taken."
                });
            } else {
                var userpassword = generateHash(password);
                var data = {
                    email: email,
                    password: userpassword,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    address: req.body.address,
                    phone: req.body.phone,
                    userName: req.body.userName,
                    admin: false
                };
                db.Users.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, false);
                    }
                });
            }
        });
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((Users, done) => {
    done(null, Users.id);
});

passport.deserializeUser((id, done) => {
    db.Users.findeById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});

// Exporting our configured passport
module.exports = passport;