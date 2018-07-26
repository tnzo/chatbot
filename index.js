var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});

//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});