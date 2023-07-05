var a; //decleration
a=5; //initilization
console.log(a);

//var:function scoped =>
var a=5;
if(a){
    var a=7;
    console.log(a);
}
console.log(a);

//let:block scoped=>
let b=10;
if(b){
    let b=12;
    console.log(b);
}
console.log(b);

//const:constant data=>
const c=12;
console.log(c);

//data type=> 1.primitivr data type
var d;
d;//undefined
console.log(d);

d=5;//number
console.log(d);

d='string'; //string
console.log(d);

d='';//null
console.log(d);

d=true;
console.log(d);

//2.non-primitive data type=>
//array:
d=[1,3,'mango'];
console.log(d);

//function:
function sum(a,b){
    console.log(a+b);
}
sum(10,20);

//object:
let person={
    name:'satish',
    id:23
};
console.log(person);
console.log(person.name);
console.log(person['id']);

//conversion=>1:implicit conversion=>
//1.string conversion=
let result;
result='5'+4;
console.log(result); 
result=5+'4';
console.log(result);   
result='5'+4+4;
console.log(result);
result=5+'4'+4;
console.log(result);
result=5+4+'4';
console.log(result);
result='5'+'string';
console.log(result);
result='5'+true;
console.log(result); 
result='5'+undefined;
console.log(result);       
result='5'+' ';
console.log(result);    

//numaric string convert into numaric number when it -*/ =>
result='5'-4;
console.log(result);    
result='5'*4;
console.log(result);    
result='5'/2;
console.log(result);    

//boolean conversion =>
let m=5;
let n=0;
if(n){
    console.log(n);
}
if(m){
    console.log(m);
}
//logical operator =>
let o=5;
let p=6;
let q=0;
console.log(o&&p);
console.log(o&&q);
console.log(o||p);
console.log(q||p);

//explicit conversion:
//numbwr conversion
let result1;
result1=Number('123');
console.log(result1);
result1=Number('sat');
console.log(result1);
result1=Number(true);
console.log(result1);
result1=Number('');
console.log(result1);
result1=Number(' ');
console.log(result1);
result1=Number(undefined);
console.log(result1);
result1=parseInt('20.21');
console.log(result1);
result1=parseFloat('20.21');
console.log(result1);
result1=+('20.21');
console.log(result1);
result1=Math.floor('20.21');
console.log(result1);

//string:
result1=String(123);
console.log(result1);

//sum of natural number =>
let s=1;
let add=0;
while(s<=5){
    add+=s;
    s+=1;
}
console.log(add);
