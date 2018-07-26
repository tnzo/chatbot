'use strict';

var express = require('express');
var server = express();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});