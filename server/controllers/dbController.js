const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const db = require('../models/animalModels');

const dbController = {};

dbController.saveItem = async (req, res, next) => {
  // console.log('req.body --->', req.body);
  const { id, name, breed, pic, contact } = req.body;
  try {
    const text = `
    INSERT INTO savedItems (id, name, breed, picture, contact)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
    const params = [ id, name, breed, pic, contact ];
    const result = await db.query(text, params);
    console.log('finderController.save Item result --->', result);
    res.locals.results = result.rows[0];
    return next();
  }
  catch (err) {
    next({
      log: `finderController.addItem: ERROR: ${err}`,
      message: { err: 'Error occurred in finderController.addItem. Check server logs for more details.' }
    });
  }
}

dbController.getData = async (req, res, next) => {
  try {
    const text = `
    SELECT *
    FROM savedItems
    `;
    const result = await db.query(text);
    // console.log('getData result ---> ', result);
    res.locals.results = result.rows;
    return next();
  }
  catch (err) {
    next({
      log: `dbController.getData: ERROR: ${err}`,
      message: { err: 'Error occurred in finderController.addItem. Check server logs for more details.' }
    });
  }
}

dbController.removeItem = async (req, res, next) => {
  const { id } = req.body;
  try {
    const text = `
    DELETE FROM savedItems
    WHERE id=${id}
    `;
    const result = await db.query(text);
    res.locals.results = result;
    return next();
  }
  catch (err) {
    next({
      log: `dbController.removeItem: ERROR: ${err}`,
      message: { err: 'Error occurred in finderController.removeItem. Check server logs for more details.' }
    });
  }
}


module.exports = dbController;
