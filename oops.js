//first w3ay of creating of obj=>***********

// let person={
//     fname:'satish',
//     lname:'shinde',
//     fullname:function(){
//         console.log(`my name is ${this.fname} ${this.lname}`)
//     }
// }
// console.log(person.fname);
// console.log(person.lname);
// person.fullname();

//class=>****************
// class car{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }
//     show(){
//         console.log(`my car ${this.name} is ${this.color} color`);
//     }
// }
// let obj=new car('bmw','black');
// obj.show();
// console.log(obj.name);

let car=class{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    show(){
        console.log(`my car ${this.name} is ${this.color} color`);
    }
}
let obj=new car('bmw','black');
obj.show();
console.log(obj.name);

//call,bind,apply=>********************

// let person={
//     fname:'satish',
//     lname:'shinde',
//     fullname:function(){
//         console.log(`my name is ${this.fname} ${this.lname}`)
//     }
// }
// let greeting=function(greet,symbol){
//    console.log(`${greet} my name is ${this.fname} ${this.lname} ${symbol}`);
// }
// let result=greeting.bind(person,'hello','!');
// result();

// greeting.call(person,'hello','!');
// greeting.apply(person,['hello','!']);


//function constructor=>*************
// function person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }
// person.prototype.age=23;
// person.prototype.fullname=function(){
//     console.log(`my name is ${this.fname} ${this.lname}`);
// }
// let obj1=new person('satish','shinde');
// obj1.fullname();
// console.log(obj1.age);

//protype chaining***********************
function supertype(){
    this.name='tejas';
}
supertype.prototype.getname=function(){
    return this.name;
}
function subtype(){
    this.age=23;
}
subtype.prototype=new supertype();
subtype.prototype.getage=function(){
    return this.age;
}
let obj2=new subtype();
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.getname());
console.log(obj2.getage);

//extend classs********************
class mobile{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    show(){
        return (`my ${this.name} mobile is ${this.color} color`);
    }
}
class model extends mobile{
    constructor(model){
        super('note 10','purple');
        this.model=model;
    }
    show1(){
        return (`${this.show()} with ${this.model} model`);
    }
}
let obj5=new model('xiomi');
console.log(obj5.model);
console.log(obj5.name);
console.log(obj5.color);
console.log(obj5.show());
console.log(obj5.show1());

//ocp*****************
let arr=[12,34,14,56,89];
function cheak(num){
    if(arr.includes(num)){
     return true;
    }
    else{
        return false;
    }
}
function add(num){
    arr.push(num);
}
add(15);
console.log(cheak(15));


// create a JavaScript class called Animals which accepts 2 input parameters (name and specie) as arguments and
// stores them internally. Now create a proto function called sing that prints the name of the
//animal with 'can sing' returned at the end.

// Example 1:
// Input:
// Billi Cat

// Output:
// Billi can sing
class animal{
    constructor(name,specie){
     this.name=name;
     this.specie=specie;
    }
    proto(){
        return (`${this.name} can sing`);
    }
}
let obj6=new animal('Billi','Cat');
console.log(obj6.proto());


// Create a JavaScript constructor function called Animals which accepts 2 input parameters 
// (name and specie) as arguments and stores them internally. Now create a proto function called
//  details that prints the name of the animal and species as shown in the exmple.

// Example 1:
// Input:
// animal = Dog
// species = Pogo

// Output:
// Animal is Dog and species is Pogo
function Animals(name,specie){
    this.name=name;
    this.specie=specie;
    this.proto=function(){
        return (`Animal is ${this.name} and species is ${this.specie}`);
    }
}
let obj7=new Animals('Dog',"Pogo");
console.log(obj7.proto());


// Given a string like an object , convert it into an object having 2 properties fname and lname
//  .Return a string having fname and lname with space seperated using that object.

// Example 1:
// Input:
// {"fname": "Dillion","lname": "Megida"}

// Output:
// Dillion Megida
let person1=`{"fname": "Dillion","lname": "Megida"}`;
let result=JSON.parse(person1);
console.log(result);
console.log(`${result.fname} ${result.lname}`);


//this with arrow function=>
let person={
    fname:'satish',
    lname:'shinde',
    fullname:()=>{
        console.log(`my name is ${this.fname} ${this.lname}`)
    }
}
console.log(person.fname);
console.log(person.lname);
person.fullname();
