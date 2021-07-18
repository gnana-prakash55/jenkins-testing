const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sanjay!!! 🙂');
});

app.listen(config.port,'0.0.0.0', () => {
  console.log(`Server started on port ${config.port}`);
});
