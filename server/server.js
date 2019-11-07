const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})


app.use((req, res) => {res.status(404)});

app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = {
    log: 'Unknown error caught in middleware',
    status: 400,
    message: { err: 'An error occurred'}
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));

module.exports = app;