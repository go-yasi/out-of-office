////////////////////////////
// ROUTES for /api/location
////////////////////////////

const router = require('express').Router();
const { Location, User, Trip } = require('../models');
const withAuth = require('../utils/auth');

// GET all locations // works
router.get('/', withAuth, async (req, res) => {
    try {
        const locationData = await Location.findAll({
            include: [{ model: User, through: Trip, as:'location_users' }]
        });
        const locations = locationData.map((location) => 
        location.get({plain: true}));
        res.render('location', {
            locations,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a location by id 
router.get('/:id', withAuth, async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: [{ model: User, through: Trip, as: 'location_users'}]
        });
        if (!locationData) {
            res.status(404).json({ message: 'No location found with this ID!' });
            return;
        }
        const locations = locationData.get({plain: true});
        
        // res.status(200).json(locations);
        console.log(locations);
        res.render('trips', {...locations, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

