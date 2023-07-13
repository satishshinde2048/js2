//es6=>**********************
var a=5;
if(a){
    var a=8;
    console.log(a);
}
console.log(a);

let b=5;
if(b){
    let b=8;
    console.log(b);
}
console.log(b);

const c=23;
console.log(c);

//arrow function+>**********
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(10,49));

//class+>*******************
let mobile=class{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    show(){
        return (`this is my ${this.name} mobile with ${this.color} color`);
    }
}
let obj=new mobile('redmi note','blue');
console.log(obj.show());

function sum1(a=12,b=32){
    return a+b;
}
console.log(sum1());

//templarte literal=>
let fname='satish';
let lname="shinde";
let result=`fullname is ${fname} ${lname}`;
console.log(result);

//destructring syntax=>****************
let person={
    name:'satish',
    age:23
}
console.log(person.name);
let {name,age}=person;
console.log(name);
console.log(age);

//rest parametar=>*********
function show(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
show(1,2,3,4,5,6,7,8);

//spread op=>**************
let arr=[12,3,4,67,89];
let d=[...arr];
console.log(d);

//promise=>
let mypromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        if(false){
            resolve('fetch data from server');
        }
        else{
            reject('requast failed');
        }
    },2000)
});
mypromise.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
})

// Construct an object and write a javascript program to print out ‘Hello, My name is John Doe’ using literals.

// Example 1:
// Input:
// const object = { starter: 'Hello, My name is', firstName: 'John', lastName: 'Doe', }

// Output:
// Hello, My name is John Doe
const object = { starter: 'Hello, My name is', firstName: 'John', lastName: 'Doe', };
console.log(`${object.starter} ${object.firstName} ${object.lastName}`);