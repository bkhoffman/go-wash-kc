const router = require('express').Router();
const prodController = require('../../controllers/products');

router.route('/cart')
    .post(prodController.create)
    .put(prodController.update)
    .delete(prodController.remove);


module.exports = router;