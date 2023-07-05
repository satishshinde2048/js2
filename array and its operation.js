//array crete=>2 way
let array;
array=[1,2,3,4,5]; 
console.log(array);

array=new Array(4,5,6,7,8);
console.log(array);

//array=>
array=[];
console.log(array);

array=[12,23,45,56];
console.log(array);

array=['satish','tejas','prashant'];
console.log(array);

array=[12,34,'satish',true,0,undefined];
console.log(array);

array=[[23,36,78,90],{name:'satish',id:25},function hello(){
    console.log('hello');
}];
console.log(array);

//acessing element through indexing=>
const myArray = ['h', 'e', 'l', 'l', 'o'];
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[5]);

//add element=>
array=[24,16,24,78];
array.push(25);
console.log(array);
array.unshift(30);
console.log(array);

//add /change element by indexing=>
array[3]=35
console.log(array);
array[7]=32
console.log(array);

//add AND delete element at spefied index=>
array=[13,34,56,89];
array.splice(2,2);//delete
console.log(array);
array=[13,34,56,89,23];
array.splice(2,0,123);//add
console.log(array);

//delete element=>
array=[12,23,56,89];
array.pop();
console.log(array);
array.shift();
console.log(array);

//array length=>
array=[12,23,56,89];
console.log(array.length);

//array operation=>
let array1=[23,15,67,98];
let array2=[12,15,23,67,56];
let array3=['satish','abhijit','sagar','tejas'];
let result;
result=array1.concat(array2);
console.log(result);
result=array1+array3;
console.log(result);
result=array1.indexOf(15);
console.log(result);
result=array1.findIndex(cheackage);
function cheackage(age){
    return age<18;
}
console.log(result);

result=array1.filter(cheack);
function cheack(n){
    return n>18;
}
console.log(result);

result=array1.map(double);
function double(x){
    return x**2;
}
console.log(result);

result=array1.map((x)=>{return x*2});
console.log(result);

result=array3.sort();
console.log(result);

result=array3.includes('satish');
console.log(result);

result=array1.find(cheackage);
console.log(result);

result=array2.slice(1,3);
console.log(result);

//crete multidimensional array=>
let array4=[[12,4,78,34],[13,46,79],[29,35,16,73]];
console.log(array4);

//acess element by indexing=>
console.log(array4[1]);
console.log(array4[2]);
console.log(array4[1][2]);
console.log(array4[2][1]);

//add element=>
array4=[[12,4,78,34],[13,46,79],[29,35,16,73]];
array4.push([12,15,17]);
console.log(array4);
array4.unshift([19,27,12,15,17]);
console.log(array4);
array4[1].push(100);
console.log(array4);
array4[4].push(200);
console.log(array4);

array4[4].unshift(300);
console.log(array4);
array4[0].unshift(500);
console.log(array4);

//delete element=>
array4=[[12,4,78,34],[13,46,79],[29,35,16,73]];
console.log(array4);
// array4.pop();
// console.log(array4);
// array4.shift();
// console.log(array4);
array4[1].shift();
console.log(array4);
array4[1].pop();
console.log(array4);

//add and delete at specified index=>
array4=[[12,4,78,34],[13,46,79],[29,35,16,73]];
console.log(array4);
array4.splice(2,1,[12,53,24]);
console.log(array4);
array4[1].splice(2,1,13,45);
console.log(array4);

//iteration of multidimensional array=>
array4=[[12,4,78,34],[13,46,79],[29,35,16,73]];
//for loop=>
for(let i=0;i<array4.length;i++){
    for(let j=0;j<array4[i].length;j++){
        console.log(array4[i][j]);
    }
}
//for of=>
for(let i of array4){
    for(let j of i){
        console.log(j);
    }
}

//forEach()=>
array4.forEach(function(data){
    data.forEach((value)=>{
        console.log(value);
    })
})

const array5=[1,2,3,4];
array5.forEach((num)=>{
    console.log(num);
})

const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
console.log(arrayOfNumbers);

let array6=[1,2,3,4];
result=array6.map(y=> y*2 );
console.log(result);

// let temp=1;
// for(let i=1;i<7;i++){
//     temp*=i;
// }
// console.log(temp);


// function factorial(k){
// if(k==0){
//     return 1;
// }
// else{
//     return k*factorial(k-1);
// }
// }
// console.log(factorial(6));


// let arr=["Red", "Green", "White", "Black"];
// result=arr.join('+');
// console.log(result);

// let arr1=["spray", "limit", "elite", "exuberant", "destruction", "present"];
// result=arr1.filter(word);
// function word(letter){
//     return letter.length>=6;
// }
// console.log(result);

let arr2=["avengers", "captain america", "ironman", "black panther"];
result=arr2.map(words=>words.toUpperCase());
console.log(result);