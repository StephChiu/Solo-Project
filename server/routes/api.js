const express = require('express');

const finderController = require('../controllers/finderController.js')

const router = express.Router();

router.get('/', finderController.getToken, (req, res) => {
  console.log(res.locals.token);
  res.status(200).json(res.locals.token);
});

module.exports = router;