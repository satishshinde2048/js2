const { DateTime } = require("luxon");
let result;
result=DateTime.now();
console.log(result);
console.log(result);

result=DateTime.local(2017, 5, 15, 8, 30);
console.log(result);

result=DateTime.fromISO("2017-05-15T08:30:00");
console.log(result);

result=DateTime.now().toString(); 
console.log(result);

result=DateTime.now();
console.log(result.year);
console.log(result.day);
console.log(result.zoneName);
console.log(result.offset);
console.log(result.toLocaleString());
console.log(result.set({hour: 3}).hour);
var f = {month: 'long', day: 'numeric'}
console.log(result.setLocale('fr').toLocaleString(f));
result=DateTime.local(2017, 5, 25).month ;
console.log(result);