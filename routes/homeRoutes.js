const router = require('express').Router();
const { Location } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const locationData = await Location.findAll();
  
      const locations = locationData.map((info) => info.get({ plain: true }));
  
      res.render('location', {
        users,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;