const router = require('express').Router();
const vehicleController = require('../../controllers/vehicles');

router.route('/signup')
    .post(vehicleController.create);

router.route('/cart')
    .post(vehicleController.create)
    .put(vehicleController.update)
    .delete(vehicleController.remove);


module.exports = router;