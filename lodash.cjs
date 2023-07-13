var _=require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);

let result;
result=_.compact([0, 1, false, 2, '', 3]);
console.log(result);

result=_.difference([2, 1], [2, 3]);
console.log(result);

var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

result=_.flatten([1, [2, [3, [4]], 5]]);
console.log(result);

var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);

result=_.slice(array, [start=0], [end=1]);
console.log(result);

result=_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
console.log(result);

result=_.countBy([6.1, 4.2, 6.3], Math.floor);
console.log(result)

function duplicate(n) {
    return [n, n];
  }
   
  result=_.flatMap([1, 2], duplicate);
  console.log(result)

  var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];
   
  result=_.reject(users, function(o) { return !o.active; });
  console.log(result);

  function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
   
  var object = { 'user': 'fred' };
   
  var bound = _.bind(greet, object, 'hi');
  console.log(bound('!'));
  // => 'hi fred!'
   
  // Bound with placeholders.
  var bound = _.bind(greet, object, _, '!');
  console.log(bound('hi'));

  _.delay(function(text) {
    console.log(text);
  }, 1000, 'later');
  // => Logs 'later' after one second.

  result=_.floor(4.006);
  console.log(result);

  result=_.random(0, 5);
  console.log(result);

  var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });
 
console.log(_.has(object, 'a'));
// => true