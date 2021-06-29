const router = require('express').Router();
const { Trip, Photos, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get a trip
router.get('/trip/location/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findAll({
        where: { location_id: req.params.id,
        include: [{ model: Location, through: User }]
        },
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/trip/:id', withAuth, async (req, res) => {
    try {
      const tripData = await Trip.findOne(req.params.id, {
          include: [{ model: Location, through: User }]
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



// DELETE a trip
router.delete('/trip/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: { id: req.params.id }
    });
    if (!tripData) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
