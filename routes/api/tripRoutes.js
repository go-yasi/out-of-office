const router = require('express').Router();
const { Trip, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get a trip
router.get('/location/:id', withAuth, async (req, res) => {
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

router.get('/:id', withAuth, async (req, res) => {
    try {
      const tripData = await Trip.findByPk(req.params.id, {
          include: [{ model: Location, model: User }]
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
});

// DELETE a trip
router.delete('/:id', withAuth, async (req, res) => {
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