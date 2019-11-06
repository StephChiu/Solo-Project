const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown error caught in middleware',
    status: 400,
    message: { err: 'An error occurred'}
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.send(errorObj.status).json(errorObj.message);
})



app.use((req, res) => {res.send(404)});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));