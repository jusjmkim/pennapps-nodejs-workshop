console.log('hello world');

var square = function (x) {
  return x * x;
};

var obj = {
  prop: 'hello'
}
obj.prop // --> "hello"
obj['prop'] // --> "hello"

console.log(square); // function
console.log(square(2)); // function call

var cb = function () {
  console.log('callback ran!');
};
// wait 500ms, then run the callback
setTimeout(cb, 500);
// --> 'callback ran!'

var cb = function (err, results...) {...}

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

var noOpMiddleware = function (req, res, next) {
    next();
};

app.use(function (req, res, next) {
    console.log('I am a middleware!');
    next();
});

var router = express.Router();
router.use(function (req, res, next) {
    console.log('I am a router!');
    next();
});
router.get('/', function (req, res, next) {
    res.send('Hello from the router!');
});
app.use('/router', router);

{
  "name": "pennapps-nodejs-workshop",
  "private": true,
  "scripts": {
    "start": "node ./bin/run-server.js"
  },
  "author": "Justin Kim",
  "dependencies": {
    "body-parser": "1.8.1",
    "debug": "2.0.0",
    "ejs": "1.0.0",
    "express": "4.9.0"
  }
}
