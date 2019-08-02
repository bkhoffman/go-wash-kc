const router = require('express').Router();
const authRoutes = require('./auth');
const prodRoutes = require('./products');
const vehicleRoutes = require('./vehicles');

router.use('/auth', authRoutes);
router.use('/products', prodRoutes);
router.use('/vehicle', vehicleRoutes);

module.exports = router;