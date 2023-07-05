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
let person={
    name:'satish',
    id:25
}
// let result4=JSON.stringify(person);
// console.log(result4);
//  result4=JSON.stringify(person,['name']);
// console.log(result4);
for(let key in person){
    //console.log(key);
    console.log(person[key]);
}