const router = require('express').Router();
const {Location, Photos, Trip, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/share', withAuth, async (req, res) => {
    try {
      const shareData = await Share.create(req.body, {
          include: [{ model: Location, Photos, Trip, User }]
      });
      res.status(200).json(shareData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;