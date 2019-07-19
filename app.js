const express = require('express');

const app = express();

app.use((req, res, next) => {
  // next eken thamai eelanga middleware ekata call karanne
  res.send('from express server bro!!!');
});

module.exports = app;
