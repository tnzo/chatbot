'use strict';

var express 	= require('express');
var bodyParser = require('body-parser');
var http		= require('http');
var server 		= express();
var msg;

msg = ""

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function (req, res) {

  //res.send('Hello World!');
  res.json({msg: "Lucas Toniazzo"})

});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});