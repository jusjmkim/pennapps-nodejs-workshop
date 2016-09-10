var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  return res.send('hello world!');
});
// Start listening for requests
app.listen(port, function () {
  console.log('Listening on port ' + port);
});