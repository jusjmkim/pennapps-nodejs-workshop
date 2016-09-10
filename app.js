var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var fs = require('fs');
var router = express.Router();
var app = express();

// serve static pages
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res) {
  fs.readFile('pennapps-nodejs-workshop.pdf', function (err, data) {
    res.contentType('application/pdf');
    res.send(data);
  });
});

app.use(router);

module.exports = app;
