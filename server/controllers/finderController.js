

const finderController = {};

finderController.getToken = (req, res, next) => {
  fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: GET,
    body: {
      "grant_type": "client_credentials", 
      "client_credentials": "fMMC2UWMKykcRutbRSXldCyOALKDeCMaBlxdcIiJ2N44e58eQr",
      "client_secret": "7iV0hO0w9IZI4b1Y3GBhxW9lIOM48zgKltjphtIY"
    }
  })
  .then(data => {
    console.log('data');
  })
  .catch(err => {
    console.log('finderController.getToken error');
  })
}

module.exports = finderController;