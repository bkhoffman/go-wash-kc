const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

// Matches with '/api/auth/login'
router.route("/login")
    .get(authController.findById);

router.route('/signup')
    .get(authController.findAll)
    // .post(authController.create)
    .put(authController.update)
    .post(passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));

module.exports = router;