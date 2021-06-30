const router = require('express').Router();
const {Location, Photos, Trip, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    const locations = locationData.map((location) => 
    location.get({plain: true}));
    res.render('share', {locations});
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/share', withAuth, async (req, res) => {
//     try {
//       const shareData = await Share.create(req.body);
//       res.status(200).json(shareData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


module.exports = router;