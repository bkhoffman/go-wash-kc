const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

router.route('/signup')
    .post(authController.signUp);

router.use(passport.authenticate('local'));

// Matches with '/api/auth/login'
router.route("/login")
    .post(authController.login);

router.route("/")
    .get(authController.home);

module.exports = router;