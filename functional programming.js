//pure function*******************
function puregreet(name){
    return`hello ${name}`;
}
console.log(puregreet('satish'));

//not pure function************
let greet='nice';
function  notpure(name1){
return `${greet} ${name1}`;
}
console.log(notpure('tejas'));

//store function into varible=>**************
function word(name){
    console.log(`hello ${name}`);
}
word('satish');
let temp=word;//store into var
temp('raj');

let name=function(name){
    console.log(`hello ${name}`);
}
name('prashant');

//function as argument=>***********
let result;
let arr=[12,34,56,78];
result=arr.map(double);
function double(num){
    return num*2;
}
console.log(result);

//function return function=>******************
function show(name){
  console.log(`hello ${name}`);
}
function returner(fn){
    return fn;
}
let text=returner(show);
text('ram');

function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(10)(5));

function random(){
    let obj={name:'satish',id:24};
    return function(){
        console.log(`my name is ${obj.name}`);
    }
}
let text1=random();
text1();

//function hold proparties and mehod=>*******
let person={
    name:'satish',id:25
 };
 console.log(person.name);
 person.age=23;
 console.log(person.age);
 person.getname=function(){
    return `${this.name}`;
 }
 console.log(person.getname());
 
 
 function person1(){

 }
 console.log(person1.name);
 person1.age=25;
 console.log(person1.age);
 person1.getname=function(){
    return `${this.name}`;
 }
 console.log(person1.getname());

 //function stored into data stucture=>
 function puregreet1(name){
    return`hello ${name}`;
}
let arr1=[puregreet1]
console.log(arr1[0]('satish'));

//asynchronous functon=>*************
function temp1(name){
    console.log(name);
}
let delayed=function(fn){
    return function(val,delay){
        setTimeout(function(){
         fn(val);
        },delay)
    }
}
let temp3=delayed(temp1);
temp3('rutika',1000);

//function composation=>**********
function double1(x){
    return x*2;
}
function squre(x){
    return x**2;
}
console.log(squre(double(2)));

//immutatability=>**************
const person2={
    name:"satish",
    id:25
}
console.log(person2);
person2.id=35;
person2.name='raja';
console.log(person2.id); 
console.log(person2.name);
Object.defineProperty(person2,'id',{
    value:13,
writable:false
})
person2.id=45;
console.log(person2.id);
Object.freeze(person2);
console.log(person2.name);
console.log(person2.id);

// let data={
//     country:'india'
// }
// function newstate(param,location){
//     this.location=location;
//    param.location=location;
//     return param;
// }
// let obj1=new newstate(data,'maharashtra');
// console.log(obj1);
// console.log(data);

let data={
    country:'india'
}
function newstate(param,location){
    return Object.assign({},param,{
        location:location
    })
}
let obj1=new newstate(data,'maharashtra');
console.log(obj1);
console.log(data);

// Create a simple javascript composition function that adds a number x with 5 and 
// divides it with 2 and print the output of that composition function.

// Example 1:
// Input:
// composition(5)

// Output:
// 5
function composition(x){
    return (x+5)/2;
}
console.log(composition(5));

// Create a Pure Function that multiplys 2 numbers.

// Example 1:
// Input:
// 2 4

// Output:
// 8
function pure(n1,n2){
    return n1*n2;
}
console.log(pure(2,4));

// Using the high order filter function, which would receive the even function and 
// would return a list of even numbers. Note: Even function is a function which would
//  return true if the input parameter is even.

// Example 1:
// Input:
// const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];

// Output:
// [0, 2, 4, 6, 8, 10 ]
const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];
let result4=listOfNumbers.filter(even);
function even(n){
    if(n==0||n%2==0){
        return n;
    }
}
console.log(result4);