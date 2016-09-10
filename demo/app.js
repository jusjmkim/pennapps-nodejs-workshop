var express = require('express');
var app = express();
var router = express.Router();

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
router.get('/', function (req, res) {
  res.locals.title = 'JavaScript is awesome!';
  res.locals.names = ['Justin', 'Julio', 'Sam'];
  return res.render('index.html.ejs');
});

router.get('/hello', function (req, res) {
  return res.send('hello Justin');
});

app.use(router);
// Start listening for requests
app.listen(port, function () {
  console.log('Listening on port ' + port);
});