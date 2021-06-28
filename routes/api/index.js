const router = require('express').Router();
const locationRoutes = require('/locationRoutes');
const loginRoutes = require('/loginRoutes');
const shareRoutes = require('/shareRoutes');
const tripRoutes = require('/tripRoutes');

router.use('/location', locationRoutes);
router.use('/login', loginRoutes);
router.use('/share', shareRoutes);
router.use('/trip', tripRoutes);

module.exports = router;