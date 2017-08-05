'use strict';

var express = require('express');

const PORT = 4100;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World inside dockerfile');
});

app.listen(PORT, HOST);
console.log(`Running on: http://${HOST}:${PORT}`);