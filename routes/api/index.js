const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const userRoutes = require('./userRoutes');
const shareRoutes = require('./shareRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/location', locationRoutes);
router.use('/users', userRoutes);
router.use('/share', shareRoutes);
router.use('/trip', tripRoutes);

module.exports = router;