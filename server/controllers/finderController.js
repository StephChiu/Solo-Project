const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const finderController = {};

finderController.getToken = (req, res, next) => {
  // console.log(req.body);
  res.locals.type = req.body.type;
  res.locals.size = req.body.size;
  res.locals.gender = req.body.gender;
  res.locals.age = req.body.age;
  fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "client_id": "fMMC2UWMKykcRutbRSXldCyOALKDeCMaBlxdcIiJ2N44e58eQr",
      "client_secret": "7iV0hO0w9IZI4b1Y3GBhxW9lIOM48zgKltjphtIY"
    }),
    headers: {"Content-type": "application/json"}
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('data is --->', data);
    res.locals.token = data.access_token;
    return next();
  })
  .catch(err => {
    console.log('finderController.getToken error');
  })
}

finderController.getAnimals = (req, res, next) => {
  console.log('getAnimals, res.locals --->', res.locals.token);
  fetch(`https://api.petfinder.com/v2/animals?type=${res.locals.type}&size=${res.locals.size}&gender=${res.locals.gender}&age=${res.locals.age}`, {
    method: 'get',
    headers: {"Authorization": `Bearer ${res.locals.token}`}
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('response data --->', data);
    res.locals.results = data;
    return next();
  })
  .catch(err => {
    console.log('finderController.getAnimals error');
  })
}

module.exports = finderController;