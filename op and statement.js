// Convert Following code into ternary



// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);


//if statement=>
// 

//if else if=>
// let prompt=require('prompt-sync')();
// let n=prompt('enter value:');
// if(n==0){
//     console.log('number is zero');
// }
// else if(n>0){
//     console.log('number is positive');
// }
// else{
//     console.log('number is negative');
// }
// console.log('if statement easy');


//nested if else statement:
// let prompt=require('prompt-sync')();
// let n=prompt('enter value:');
// if(n>=0){
//     if(n==0){
//     console.log('number is zero');
//    }
// else{
//     console.log('number is positive');
//   }
// } 
// else{
//     console.log('number is negative');
// }
// console.log('if statement easy');

//body of if else=>
// let prompt =require('prompt-sync')();
// let n=prompt ('enter value:')
// if(n>=0)
// console.log('positive number');
// else 
// console.log('negative number');

//switch statement=>

// let num=2;
// switch(num){
//     case 1:
//         num='one';
//         break;
//     case 2:
//        num='two';
//        break;
//     case 3:
//         num='three';
//         break;
//     default:
//         console.log('invalid');      
//         break;  
// }
// console.log(num);

//simple calculator=>
// 

//multiple switch cases=>
// let fruit='apple';
// switch(fruit){
//     case 'mango':
//     case 'banana':
//     case 'apple':
//     console.log(`${fruit} is a fruit.`) ;
//     break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;       
// }

//switch=>
// let prompt=require('prompt-sync')();
// let n=prompt('enter a number 1,2,3:');
// switch(n){
//     case '1':
//         n='hello world';
//         break;
//     case '2':
//         n='very good';
//         break;
//     case '3':
//         n='nice';
//         break;
//     default:
//         n='not found';
//         break;        
// }
// console.log(n);

//even odd number=>
// let prompt=require('prompt-sync')();
// let number=prompt('enter number');
// let result=(number%2==0)?'even number':'odd number';
// console.log(result);

//cheaking number=>
// let prompt=require('prompt-sync')();
// let number=prompt('enter number');
// let result=(isNaN(number))?'not a number':'number';
// console.log(result);

//comparision=>
var num1 = 5 ;
var num2 = 10;
let result=(num2>num1)?'The larger of 5 and 10 is 10':'The larger of 5 and 10 is 5';
console.log(result);