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