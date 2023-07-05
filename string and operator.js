let string1='satish';
let string2='vilas';
let string3='      shinde      ';
//charat()=>aceess the charcter inside string...
let result;
result=string1.charAt(2);
console.log(result);

//concat()=>add of two string..
result=string1.concat(string2);
console.log(result);
result=string1+string3;
console.log(result);

//replace()=>replace string with another string...
let string4='i am tejas kambale';
result=string4.replace('tejas','prashant');
console.log(result);

//split()=>split string into array of substring...
let text = "How are you doing today?";
result=text.split(' ');
console.log(result);
result=text.split('');
console.log(result);
result=text.split(' ',3);
console.log(result);
result=text.split(' ');
let result1=result[2];
console.log(result1);

//substr()=>extract part of string..
let text1 = "Hello world!";
result=text1.substr(1,4);
console.log(result);
result=text1.substr(1);
console.log(result);
result=text1.substr(0,1);
console.log(result);
result=text1.substr(-6,5);
console.log(result);

//substring()=>extract charcter from start to end...
result=text1.substring(1,4);
console.log(result);
result=text1.substring(2);
console.log(result);
result=text1.substring(-1);
console.log(result);
result=text1.substring(text1.length -1);
console.log(result);

//slice()=>extarct part of string... same as substring**
result=text1.slice(-1);
console.log(result);

//toUppercase & toLowercase()=>
result=text1.toUpperCase();
console.log(result);
result=text1.toLowerCase();
console.log(result);

//includes()=>search for a string and return boolean value..
result=text1.includes('Hello');
console.log(result);

//search()=>>search for a string and return position of match..
result=text1.search('llo');
console.log(result);

//escape charcter=>
let text2='my name is \'satish\'';
console.log(text2);

//length=>
result=text1.length;
console.log(result);

let a=(1,2,3,4);
console.log(a);

result=typeof(NaN);
console.log(result);

result=(5>3)?'true':"false";
console.log(result);

let x=5;
let y=6;
console.log(++x);
console.log(x++);
console.log(++x);

x+=23;
console.log(x);

let fname='satish';
let lname="shinde";
result=`my name is  ${fname} ${lname}`;
console.log(result);

result=string3.trim();
console.log(result);

result=string3.trimStart();
console.log(result);

result=string3.trimEnd();
console.log(result);

var string5 = "Welcome to this Javascript Guide!"; 
result=returnbyseparator(string5,'');
console.log(result);
result3=returnbyseparator(result," ");
console.log(result3);
function returnbyseparator(string,separator){
    return string.split(separator).reverse().join(separator);
}

//spread operator=>
let v=[1,2,3,4];
let n=[...v];
console.log(n);

 let str='Hello';
 let temp='';
 for(let i=str.length-1;i>=0;i--){
    temp+=str[i];
 }
 console.log(temp);
 
 result=new String("satish");
 console.log(result);
 console.log(typeof(result));