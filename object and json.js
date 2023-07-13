//cretion of object=>
// let person={
//     name:'satish',
//     id:25
// }
// console.log(typeof(person));
// //acess the proparty object=>
// console.log(person);
// console.log(person.name);
// console.log(person.id);
// console.log(person['name']);
// console.log(person['id']);

//nested object=>
// let student={
//     fname:'satish',
//     lname:"shinde",
//     mark:{
//         physics:100,
//         chemistry:89
//     }
// }
// console.log(student);
// console.log(student.fname);
// console.log(student.lname);
// console.log(student.mark);
// console.log(student.mark.physics);

// console.log(student['fname']);
// console.log(student.mark['physics']);

//js object method=>
// let student={
//     fname:'satish',
//     lname:"shinde",
//     fullname:function(){
//         return `my name is ${this.fname} ${this.lname}`;
//     }
// }
// console.log(student);
// console.log(student.fname);
// console.log(student.lname);
// console.log(student.fullname());
// console.log(student.fullname);

//adding proparties to the obj=>
// let student={};
// student.name='satish';
// student.id=27;
// console.log(student);

//json=>
// let person={
//     "name":"prashant",
//     "id":25
// }
// console.log(typeof(person));
// //acess the proparty object=>
// console.log(person);
// console.log(person.name);
// console.log(person.id);
// console.log(person['name']);
// console.log(person['id']);

//json to js object=>
// let person=`{
//     "name":"prashant",
//     "id":25
// }`;
// let result4=JSON.parse(person);
// console.log(result4);

//js obj to json=>
// let person={
//     name:'satish',
//     id:25
// }
// let result4=JSON.stringify(person);
// console.log(result4);
//  result4=JSON.stringify(person,['name']);
// console.log(result4);
// for(let key in person){
//     //console.log(key);
//     console.log(person[key]);
// }

//json to js object=>
// let person=`{
//     "name":"prashant",
//     "id":25
// }`;
// let result4=JSON.parse(person,['name']);
// console.log(result4);
// result4=JSON.parse(person);
// console.log(result4);

//set=>crete
// let number
// number=new Set([1,2,3,4,5]);
// console.log(number);
// //add data to set=>
// number=new Set();
// number.add(12);
// number.add(13);
// number.add(14);
// number.add(15);
// console.log(number);

// //delete()=>
// number.delete(13);
// console.log(number);
// //has()=>
// console.log(number.has(15));
// //clear=>
// number.clear();
// console.log(number);

// //foreach()=>
// number=new Set([1,2,3,4,5]);
// console.log(number);
// let temp='';
// number.forEach((value)=>{
//    temp+=value;
// })
// console.log(temp);
// //values()=>
// let result;
// result=number.values();
// let text='';
// for(let entry of result){
//     text+=entry;
// }
// console.log(text);
// //keys()=>
// result=number.keys();
// text='';
// for(let entry of result){
//      text+=entry;
// }
// console.log(text);
// //entries()=>
// result=number.entries();
// text='';
// for(let entry of result){
//   text+=entry;
// }
// console.log(text);

//map=>
// let fruit;
// fruit=new Map([['mango',500],['grapes',200],['apple',400]]);
// console.log(fruit);
// //add values to map=>
// fruit=new Map();
// fruit.set('dragon',1000);
// fruit.set('chikoo',700);
// fruit.set('ghava',600);
// console.log(fruit);
// //delete=>
// fruit.delete('dragon');
// console.log(fruit);
// //has()=>
// console.log(fruit.has('chikoo'));
// //get()=>
// console.log(fruit.get('chikoo'));
// //clear()=>
// fruit.clear();
// console.log(fruit);

// //map op=>
// //foreach=>
// fruit=new Map([['mango',500],['grapes',200],['apple',400]]);
// console.log(fruit);
// let temp='';
// fruit.forEach((value)=>{
//   temp+=value;
// })
// console.log(temp);

// //key()=>
// let result;
// result=fruit.keys();
// let text='';
// for(let entry of result){
//     text+=entry;
// }
// console.log(text);
// //values()=>
// result=fruit.values();
// text='';
// for(let entry of result){
//     text+=entry;
// }
// console.log(text);
// //entries()=>
// result=fruit.entries();
// text='';
// for(let entry of result){
//     text+=entry;
// }
// console.log(text);

// //problem's=>
// let  user={ "name":{ "firstName":"Almabetter", "lastName":"Courses" } };
// function fullName(user){
//     // Your code goes here
//     return (user.name.firstName+' '+user.name.lastName);
//   }
//   console.log(fullName(user));


//1. Given two array of object

names = [
          {name:"raju",
           roll:1},
          {name:"ram",
           roll:2}
        ]

score = [
          {score:9,
            roll:1},
          {score:10,
           roll:2}
        ]

// map the score and with the name and roll number.
// Expected Result :
// Result = [
//           {score:9,
//             name:"raju",
//             roll:1},
//           {score:10,
//             name:"ram"
//            roll:2}
//          ]
// (Try to create an algorithm that runs in O(n) time complexity)
let result=names.map((e,i)=>{
let temp=score.find((element)=>element.roll===e.roll);
if(temp.score){
    e.score=temp.score
}
return e;
})
console.log(result);