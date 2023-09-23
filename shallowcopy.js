let person1={
    name:'satish',
    id:25,
    address:{
        city:'pune',
        state:'maharashtra'
    }
}
let person2={...person1};
person2.address.city='mumbai';
console.log(person1);
console.log(person2);