//decleration of function***********
function sum(a,b){
    console.log(a+b);
}
//calling function**********
sum(10,5);

//parameter& argument=>***********
function multi(a,b){//parameter
    console.log(a*b);
}
multi(10,5);//argument
let m=12,n=5;
multi(m,n);

//default pareameter=>
function div(a=20,b=10){
    console.log(a/b);
}
div();
div(30);
div(50,5);

//return statement***********
function sub(a,b){
    return a-b;
}
console.log(sub(10,5));

//helper function**********
function double(x){
    return x*2;
}
function squre(x){
    return double(x)**2;
}
console.log(squre(2));

//function expression and anonymous function=>
let add=function (a,b){
    return a+b;
}
console.log(add(10,10));

//arrow function**********
let division=(a,b)=>{
    return a/b;
}
console.log(division(32,4));

let triple=n=>{
    return n*3;
}
console.log(triple(34));

let word=()=>{
    return 'hello';
}
console.log(word());

//hoisting;
a=5;
console.log(a);
var a=6;

b=56
console.log(b);
var b=5;

add1(10,34);
function add1(a,b){
    console.log(a+b);
}

//self invoking function*******
(function hello(){
    console.log('hello');
})();

//currying *************
function sum1(a){
    return function(b){
        return a+b;
    }
}
console.log(sum1(3)(4));

//clouser***********
function random(){
    let obj={name:'satish',id:25}
    return function (){
        console.log(`my name is ${obj.name}`);
    }
}
let temp=random();
temp();