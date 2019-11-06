const express = require('express');

const finderController = require('../controllers/finderController.js')

const router = express.Router();

router.get('/', finderController.getToken, (req, res) => {
  res.status(200).json(res.locals.results);
});