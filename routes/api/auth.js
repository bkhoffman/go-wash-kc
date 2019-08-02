const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

router.route('/signup')
    .post(authController.create);

// Matches with '/api/auth/login'
router
    .use('/login', passport.authenticate('local'))
    .route('/login')
    .post(authController.login);

router
    .use('/', passport.authenticate('local'))
    .route('/')
    .post(authController.login);

module.exports = router;