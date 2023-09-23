let _=require('lodash');
let result;
result=_.compact([0, 1, false, 2, '', 3]);
console.log(result);

var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
  console.log(_.findIndex(users, function(o) { return o.user == 'barney'; }));

  console.log(_.flatten([1, [2, [3, [4]], 5]]));
  
  console.log(_.indexOf([1, 2, 1, 2], 2))