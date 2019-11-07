const express = require('express');

const dbController = require('../controllers/dbController.js')

const router = express.Router();

router.post('/saveItem', dbController.saveItem, (req, res) => {
  res.status(200).json(res.locals.results);
})

router.get('/getData', dbController.getData, (req, res) => {
  res.status(200).json(res.locals.results);
})

router.post('/removeItem', dbController.removeItem, (req, res) => {
  res.status(200).json(res.locals.results);
})

module.exports = router;