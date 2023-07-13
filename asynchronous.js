//asynchronous task******************
// console.log('hello');
// setTimeout(function(){
//     console.log('nice');
// },4000);
// console.log('happy');

//setTimeout()=>*************
// function show(){
//     console.log('hello world');
// }
// setTimeout(show,3000);

// setTimeout(function(){
//     console.log('beautiful');
// },2000);

// setTimeout(function(){
//     let datetime=new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
// },2000);

// function show(){
//     let datetime=new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
//     let id=setTimeout(show,3000);
//      clearInterval(id);
// }
// show();

// function add2(a,b){
//     console.log(a+b);
// }
// setTimeout(add2,3000,10,23)

// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },3000+i)
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }

//setInterval=>
// let count=0;
// let id =setInterval(function(){
//     count++;
//     if(count==4){
//         clearInterval(id);
//     }
//     let datetime=new Date();
//     let time=datetime.toLocaleTimeString();
//      console.log(time);
// },2000);

// count=0;
// let id=setInterval(function(){
//     count+=2;
//     console.log(count);
//     if(count==10){
//         clearInterval(id);
//     }
// })

//fastest promise=>
// "let num1=500;
// let num2=100;
// let promise1=new Promise(function(resolve,reject){
//     setTimeout(resolve,num1,'one');
// })
// let promise2=new Promise(function(resolve,reject){
//     setTimeout(resolve,num2,'two');
// })
// Promise.race([promise1,promise2]).then(function(value){
//     console.log(value);
// })

let n1=25;
let n2=65;
// function test(arr){
//     arr.forEach(element => {
//         element.then(function(value){
//             if(value>42){
//                 console.log(`${value} is resolved`);
//             }
//             else{
//                 console.log(`${value} is rejected`);
//             }
//         })
//     });
// }
