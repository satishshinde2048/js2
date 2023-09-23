let {DateTime} =require('luxon');
let result;
result=DateTime.now().toISO();
console.log(result);

result=DateTime.local() ;
console.log(result);

result=DateTime.local(2017, 3, 12, 5);
console.log(result);   

result=DateTime.local(2017, 5, 25).year;
console.log(result); 

result=DateTime.local(2017, 5, 25).zoneName;
console.log(result);

result=DateTime.local(2017, 5, 25).millisecond;
console.log(result);