const express = require('express');

const finderController = require('../controllers/finderController.js')

const router = express.Router();

router.post('/', finderController.getToken, finderController.getAnimals, (req, res) => {
  res.status(200).json(res.locals.results);
});

module.exports = router;