const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

router.route('/signup')
    .post(authController.create);

router.use(passport.authenticate('local'));

// Matches with '/api/auth/login'
router.route("/login")
    .get(authController.findOne);

router.route("/")
    .get(authController.findOne);

module.exports = router;