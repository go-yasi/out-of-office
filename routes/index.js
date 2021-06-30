const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/location', locationRoutes);

module.exports = router;