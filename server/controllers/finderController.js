const fetch = require('node-fetch');

const finderController = {};

finderController.getToken = (req, res, next) => {
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
    console.log('data is', data);
    res.locals.token = data.access_token;
    return next();
  })
  .catch(err => {
    console.log(err)
    console.log('finderController.getToken error');
  })
}

finderController.getAnimals = (req, res, next) => {

}

module.exports = finderController;