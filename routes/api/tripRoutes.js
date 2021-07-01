const router = require('express').Router();
const { Location, Trip, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get a trip   /// reffer to location by id
// router.get('/location/:id', async (req, res) => {
//   try {
//     const tripData = await Trip.findAll({
//         where: { trip_id: req.params.id,
//         include: [{ model: Location }]
//         },
//     });
//     const trips = tripData.get({plain: true});
//     res.render('trip', { 
//       trips, 
//       // loggedIn: req.session.loggedIn 
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get('/:id', withAuth, async (req, res) => {
    try {
      const tripData = await Trip.findByPk(req.params.id, {
        include: [{
          model:User,
            attributes: [
              'username',
            ],
            
          model: Location,
            attributes: [
             'city',
             'country',
            ],
        }]
    });
      if (!tripData) {
        res.status(404).json({ message: 'No trips found with this ID!' });
        return;
      }
      const trips = tripData.get({plain: true});
      // add a render similar to location by id, renders post.handlebars page but the url is trip/:id
      // res.status(200).json(trips);
      console.log(trips);
      res.render('post', {trips, logged_in: req.session.logged_in})
    } catch (err) {
      res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
  try {
    // console.log(req.body)
    const shareData = await Trip.create({...req.body, user_id: req.session.user_id});
    res.status(200).json(shareData);
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