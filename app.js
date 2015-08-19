var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkins');
});

app.get('/hello', function (req, res) {
  res.send('hello world');
});

app.get('/goodbye', function (req, res) {
  res.send('goodbye');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
