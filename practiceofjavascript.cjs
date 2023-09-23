// let a=8;
// let b=5;
// while(b>0){
//     a--;
//     b--;
// }
// console.log(a);

// let a=5;
// let b=6;
// let sum=0;
// while(b>0){
//     sum+=a;
//     b--
// }
// console.log(sum);

// let a=9;
// let b=3;
// let sum=a+b;
// let d=0;
// while(sum!=a){
//   sum+=b;
//   d++;
// }
// console.log(d);

// let result;
// result=(23).toString();
// console.log(result);

// result=('satish').toString();
// console.log(result);


// result=(true).toString();
// console.log(result);


// result=Boolean('');
// console.log(result);

// let x=5;
// // x++;
// console.log(x++);
// let prompt=require('prompt-sync')();
// let a=prompt('enter a number:');
// let result1=(a%2==0?"even":"odd");
// console.log(result1);

// let string='satish shinde';
// let reversesentance=reversebyseparator(string,"");
// console.log(reversesentance);
// let reverseeachword=reversebyseparator(reversesentance," ");
// console.log(reverseeachword);
// function reversebyseparator(string,separator){
//     return string.split(separator).reverse().join(separator);
// }

// let a=[12,2,3,45,56,66];
// let b=[...a];
// console.log(b);

// let a='satish';
// let b='shinde';
// // // console.log(a+b);
// // a+=' kambale';
// // console.log(a);
// console.log(`my name is ${a} ${b}`);
// console.log(a.length);
// console.log('my name is \'raj kambale\'')
// console.log(a[1]);
// console.log(a[3]);
// console.log(a.charAt(5));
// a[0]="S";
// console.log(a);
// a='soma';
// console.log(a);
// let h='h';
// let j='H';
// console.log(h===j);
// let sub='In JavaScript, strings are created by\
//  surrounding them with quotes.\
// There are three ways you can use quotes.';
// console.log(sub);

// let c='hello';
// let d=new String('hello');
// console.log(c);
// console.log(d);
// console.log(typeof(c));
// console.log(typeof(d));

// let a='satish';
// let b='raj';
// let d='SWARA';
// let c='  shinde  ';
// let result;
// result=a.concat(' ',b);
// console.log(result);
// result=d.toLowerCase();
// console.log(result);
// result=a.toUpperCase();
// console.log(result);
// result=c.trim();
// console.log(result);
// result=a.substr(0,4)
// console.log(result);
// result=a.substr(-1)
// console.log(result);
// result=a.substr(-1,3)
// console.log(result);
// result=a.substr(-5,4)
// console.log(result);
// result=a.substring(-1)
// console.log(result);
// result=a.slice(0,4)
// console.log(result);
// result=a.split("",);
// console.log(result);
// result=a.replace('sat','mat')
// console.log(result);
// result=a.includes('sat');
// console.log(result);
// result=a.search('ish');
// console.log(result);
// let a=(1,2,3,4,5);
// console.log(a);

// let a;
// a=[12,1,3,45,67];
// console.log(a);
//  a=['satish','raj','tej'];
// console.log(a);
//  a=[12,1,'satish',true]
// console.log(a);
// a=[];
// console.log(a);
// a=[
//     function sum(a,b){
//         return a+b;
//     },
//     {name:'satish',id:25},
//     [12,13,34,56]
// ];
// console.log(a);

// a=[123,23,4,56];
// console.log(a);
// a=new Array(12,36,78,90);
// console.log(a);
// console.log(a[0]);
// console.log(a[3]);
// console.log(a.indexOf(90));
// a=[12,36,78,90];
// a.push(25);
// console.log(a);
// a.unshift(35);
// console.log(a);
// a.pop();
// console.log(a);
// a.shift();
// console.log(a);
// a.splice(3,1,100);
// console.log(a);
// a[5]=110;
// console.log(a);
// a[4]=105;
// console.log(a);
// a[1]=35;
// console.log(a);
// console.log(a.slice(0,3));
// console.log(a.length);

// let d= ['sleep', 'work', 'exercise']
// let e= ['eat'];
// let no= [4, 9, 16, 25, 36, 49];
// let result=d.concat(e);
// console.log(result);
// result=d+e;
// console.log(result);
// result=d.sort();
// console.log(result);
// result=no.filter((no)=>{return no>=18});
// console.log(result);
// result=no.map(Math.sqrt);
// console.log(result);
// let b=[2,3,4,5];
// result=b.map(num=>num*2);
// console.log(result);
// console.log(b.includes(5));
// console.log(b.find(num=>num<5));

// let a=[[12,23,34],[36,67,89],[19,28,17]];
// console.log(a);
// console.log(a[1][1]);
// a[1][1]=25;
// console.log(a);
// a.push(916);
// console.log(a);
// a[1].unshift(32);
// console.log(a);
// a.pop();
// console.log(a);
// a[1].shift();
// console.log(a);
// a.splice(2,1,21,87,65);
// console.log(a);

// let studentsData = [['Jack', 24], ['Sara', 23],];

// studentsData.forEach(function(student){
// student.forEach(function(data){
//     console.log(data);
// });
// });

// for(let i of studentsData){
//     for(let j of i){
//         console.log(j);
//     }
// };
// for(let i=0;i<studentsData.length;i++){
//     for(let j=0;j<studentsData[i].length;j++){
//         console.log(studentsData[i][j]);
//     }
// }

// const arrayOfNumbers = [1, 2, 3, 4];
// let m=arrayOfNumbers.reduce((accumalator,currentValue,index,Array)=>Array[index]=Array[index]*2);
// console.log(arrayOfNumbers);

// let a=[[12,34,56],[23,67,98],[10,90,70]];
// console.log(a.flat(3));
//  a=[[12,34,56],[23,67,98],[10,90,70]];
// let result=a.flat(3);
// console.log(result);+
// result=[].concat(...a);
// console.log(result);
// result=[].concat.apply([],a);
// console.log(result);
// result=a.reduce((accumalator,curval)=>{
//     return accumalator.concat(curval);
// },[])
// console.log(result);
// let b=[1,[2,[3,[4,[6,[7,[8,[9,]]]]]]]];
// console.log(b);
// result=b.flat(7);
// console.log(result);

// let a=[1,2,3,4,5,6];
// let result=a.find((n)=>n>3);
// console.log(result);

// let b=[1,2,3,4,5,6];
//  result=b.findIndex((n)=>n>3);
// console.log(result);

// names = [
//     {name:"raju",
//      roll:1},
//     {name:"ram",
//      roll:2}
//   ]

// score = [
//     {score:9,
//       roll:1},
//     {score:10,
//      roll:2}
//   ]

// // map the score and with the name and roll number.
// // Expected Result :
// // Result = [
// //     {score:9,
// //       name:"raju",
// //       roll:1},
// //     {score:10,
// //       name:"ram"
// //      roll:2}
// let result=names.map((e,i)=>{
//     let temp=score.find(element=>element.roll===e.roll)
//     if(temp.score){
//         e.score=temp.score;
//     }
//     return e;
// })
// console.log(result);

// let a;
// console.log(a);
//  a=243;
// console.log(a);
// a='satish';
// console.log(a);
// a=true;
// console.log(a);
// a="";
// console.log(a);

// let person={
//     name:"satish",
//     id:25
// }
// console.log(person.name)
// console.log(person.id)
// console.log(person['name']);

// let student={
//     name:'raj',
//     id:25,
//     mark:{
//         physics:100,
//         chemistry:90
//     }
// }
// console.log(student)
// console.log(student.name)
// console.log(student.mark)
// console.log(student.mark.chemistry)

// let person={
//     name:"satish",
//     id:25,
//     greet:function(){
//         console.log("hello world");
//     }
// }
// console.log(person.name)
// console.log(person.id)
// console.log(person['name']);
// console.log(person.greet);
// person.greet();

// let person1={
//     fname:'satish',
//     laname:'shinde',
//     fullname:function(){
//         console.log(`my name is ${this.fname} ${this.lname}`);
//     }
// }
// person1.fullname();

// let person2={
//     fname:'satish',
//     laname:'shinde',
//     fullname:()=>{
//         console.log(`my name is ${this.fname} ${this.lname}`);
//     }
// }
// person2.fullname();

// let student1={};
// student1.name='satish';
// student1.id=25;
// student1.greet=function(){
//     console.log("hello world");
// }
// console.log(student1);

// let a=new Set([1,2,3,4,5]);
// console.log(a);
// a=new Set([1,2,3,4,5,2,3]);
// console.log(a);
// let b=new Set();
// b.add(7);
// b.add(8);
// b.add(9);
// b.add(10);
// console.log(b);

// let c=new Set([12,14,15,16]);
// console.log(c);
// console.log(c.has(13));
// c.delete(12)
// console.log(c);
// c.clear();
// console.log(c);
// c.forEach((data)=>{
//     console.log(data);
// })

// let result;
// result=c.keys();
// let temp="";
// for(let key of result){
//     temp+=key;
// }
// console.log(temp);

// let result;
// result=c.values();
// let temp="";
// for(let value of result){
//     temp+=value;
// }
// console.log(temp);

// let result;
// result=c.entries();
// let temp="";
// for(let entry of result){
//     temp+=entry;
// }
// console.log(temp);

// let a=new Map([['banana',500],['orange',600],['grapes',700]]);
// console.log(a);

// let a=new Map();
// a.set('banana',500);
// a.set('orange',600);
// a.set('grapes',700);
// console.log(a);

// let a=new Map([['banana',500],['orange',600],['grapes',700]]);
// console.log(a);
// console.log(a.has('banana'));
// console.log(a.get('orange'));
// a.delete('banana')
// console.log(a);
// a.clear();
// console.log(a);

// a.forEach((data)=>{
    
//     console.log(data);
// });

// let result=a.keys();
// temp="";
// for(let key of result){
//     temp+=key;
// }
// console.log(temp);

// let result=a.values();
// temp="";
// for(let value of result){
//     temp+=value;
// }
// console.log(temp);


// let result=a.entries();
// temp="";
// for(let entry of result){
//     temp+=entry;
// }
// console.log(temp);

// let person1=`{
//     "name":"satish",
//     "id":25
// }`
// console.log(person1);
// console.log(person1.name);
// console.log(person1.id)
// let result=JSON.parse(person1);
// console.log(result); 

// let person={
//     name:"satish",
//     id:25
// }
// result=JSON.stringify(person);
// console.log(result); 
// result=JSON.stringify(person,['name']);
// console.log(result); 


// let person1=`{
//     "name":"satish",
//     "id":25
// }`
// console.log(person1);

// let person={
//     name:'satish',
//     id:25
// }
// for (let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

// let prompt=require('prompt-sync')();
// let n=prompt('enter a number:');
// if(n%2==0){
//     console.log('even number');
// }
// else{
//     console.log('odd number');
// }

// if(n==0){
//     console.log('number is zero');
// }
// else if(n>0){
//     console.log('number is positive');
// }
// else{
//     console.log('number is negative');
// }

// if(n>=0){
//     if(n==0){
//         console.log('number is zero');
//     }
//     else{
//         console.log('number is positive'); 
//     }
// }
// else{
//     console.log('number is negative');
// }

// if(n%2==0)
// console.log('even number');
// else
// console.log('odd number');

// let n1=parseFloat(prompt('enter a number1:'));
// let n2=parseFloat(prompt('enter a number2:'));
// let c;
// let op=prompt('enter operation + * - / : ');
// switch(op){
//     case '+':
//        c=n1+n2;
//        break;
//     case '-':
//        c=n1-n2;
//        break; 
//     case '*':
//        c=n1*n2;
//        break;
//        default:
//         c='not valid opeartion';
//         break;          

//     case '/':
//        c=n1/n2;
//        break;   
// }
// console.log(`The ${n1} ${op} ${n2} is ${c}`);

// let prompt=require('prompt-sync')();
// let age = parseInt(prompt('enter a age : '));
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);

// result=(age>=18 ?'You are eligible to vote.' :'You are not eligible to vote yet.');
// console.log(result);

// let prompt=require('prompt-sync')();
// let n=parseFloat(prompt('enter a number : '));
// result=(n>=0?(n==0 ?'zero' :'positive'):'negative');
// console.log(result);

// let a=5;
// if(a){
//     let a=7;
//     console.log(a);
// }
// console.log(a);

// var b=5;
// if(b){
//     var b=7;
//     console.log(b);
// }
// console.log(b);

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=5;i>0;i--){
//     console.log(i);
// }

// let temp="";
// for(let i=1;i<=5;i++){
//    temp+="*";
// }
// console.log(temp);

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// let person={
//     name:"satish",
//     id:25
// }
// for (let i in person){
//     console.log(i);
//     console.log(person[i]);
// }

// let str='satish';
// let temp="";
// for(let i in str){
//     temp+=str[i]
// }
// console.log(temp);

// let arr=[12,2,3,4,56];
// for(let i in arr){
//     console.log(arr[i]);
// }

// let arr=[18,23,45,67];
// for(let i of arr){
//     console.log(i);
// }

// let str='satish';
// for(let i of str){
//     console.log(i);
// }
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let j=1;
// do{
//     console.log(j);
//     j++;
// }while(j<=5);

// for(let i=1;i<=5;i++){
//         if(i==3){
//             continue;
//         }
//         console.log(i);
//     }

// loop1:
// for(let i=1;i<=3;i++){
//     loop2:
//     for(let j=1;j<=3;j++){
//         if(i==2&&j==2){
//         break loop1;
//         }
//         console.log(i,j)
//     }
// }

// let i=1;
// while(i<=5){
//     if(i==3){
//        continue;
//     }
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     if(i==3){
//         continue;
//     }
//  console.log(i);
//  i++;
// }while(i<=5);

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }
// let i=1;
// for( ;i<=10;i++){
//     console.log(i);
// }

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,15));

// function sum(a=10,b=20){
//     return a+b;
// }
// console.log(sum(12,23));

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,15));

// function double(x){
//     return x*2;
// }
// function squre(x){
//     return double(x)**2;
// }
// console.log(squre(2));

// function fareniet(f){
//     return f-32;
// }
// function getcelcius(f){
//     return fareniet(f)*5/9;
// }
// console.log(getcelcius(59));

// let sum=function(a,b){
//     return a+b;
// }
// console.log(sum(10,10));

// let sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(20,10));
// a=5
// console.log(a);
// var a=6;

// sum(10,5);
// function sum(a,b){
//     console.log(a+b);
// }


// (function sum(a,b){
//     console.log(a+b);
// }(10,30))


// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(sum(10)(5));

// function show(){
//     let obj={fname:'satish',lname:'shinde'};
//     return function(){
//         console.log(`my name is ${obj.fname} ${obj.lname} `);
//     }
// }
// let temp=show();
// temp();

// console.log('hello world');
// let sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(10,10));
// let person={
//     name:'satish',
//     id:25
// }
// console.log(person);

// console.log('hello world');
// setTimeout(function(){
//     console.log('hello satish');
// },2000);
// console.log('hello tejas');

// setTimeout(function(){
//     console.log('hello world');
// },3000)

// function show(){
//     console.log('hello world');
// }
// setTimeout(show,3000)

// function show(){
//     console.log('hello world');
//     setTimeout(show,3000);
// }
// show();

// setTimeout(function(){
//     let datetime= new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
// },1000)

// function show(){
//     let datetime= new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
// }
// setTimeout(show,1000);

// function show(){
//     let datetime= new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
//     setTimeout(show,1000);
// }
// show();

// function fullname(fname,lname){
//     console.log(`my name is ${fname} ${lname}`);
// }
// setTimeout(fullname,2000,'sai','shinde');

//  let id=setTimeout(function(){
//     let datetime= new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
// },1000)
// clearTimeout(id);

// function show(){
//     let datetime= new Date();
//     let time=datetime.toLocaleTimeString();
//     console.log(time);
//     let id=setTimeout(show,1000);
//     clearTimeout(id);
// }
//  show();

//setinterval********************************

// setInterval(function(){
//         console.log('hello world');
//     },3000)
    
    // function show(){
    //     console.log('hello world');
    // }
    // setInterval(show,3000)
    
    // function show(){
    //     console.log('hello world');
    //     setInterval(show,3000);
    // }
    // show();
    
    // setInterval(function(){
    //     let datetime= new Date();
    //     let time=datetime.toLocaleTimeString();
    //     console.log(time);
    // },1000)
    
    // function show(){
    //     let datetime= new Date();
    //     let time=datetime.toLocaleTimeString();
    //     console.log(time);
    // }
    // setInterval(show,1000);
    
    // function show(){
    //     let datetime= new Date();
    //     let time=datetime.toLocaleTimeString();
    //     console.log(time);
    //     setInterval(show,1000);
    // }
    // show();
    
    // function fullname(fname,lname){
    //     console.log(`my name is ${fname} ${lname}`);
    // }
    // setInterval(fullname,2000,'sai','shinde');
    
    // let count=0;
    //  let id=setInterval(function(){
    //     count++;
    //     if(count==4){
    //         clearInterval(id);
    //         }
    //         let datetime= new Date();
    //     let time=datetime.toLocaleTimeString();
    //     console.log(time);
    // },1000)
    
    // for (var i = 0; i < 3; i++) {
    //     setTimeout(function() { console.log(i); }, 1000 + i);
    //   }

    //   for (let i = 0; i < 3; i++) {
    //     setTimeout(function() { console.log(i); }, 1000 + i);
    //   }

    // let person={
    //     fname:'satish',
    //     lname:'shinde',
    //     fullname:function(){
    //         console.log(`my name is ${this.fname} ${this.lname}`);
    //     }
    // }
    // console.log(person);
    // console.log(person.fname);
    // person.fullname();

    // function person(fname,lname){
    //     this.fname=fname;
    //     this.lname=lname;
    //     this.fullname=function(){
    //         console.log(`my name is ${this.fname} ${this.lname}`);
    //     }
    // }
    // let obj=new person('satish','shinde');
    // obj.fullname();
    // console.log(obj.fname);

    // class mobile{
    //     constructor(name,color){
    //         this.name=name;
    //         this.color=color;
    //     }
    //     show(){
    //         console.log(`my ${this.name} mobile is ${this.color} color`);
    //     }
    // }
    // let obj=new mobile('iphone 14 pro','blue');
    // obj.show();
    // console.log(obj.name);

    //  let mobile=class{
    //     constructor(name,color){
    //         this.name=name;
    //         this.color=color;
    //     }
    //     show(){
    //         console.log(`my ${this.name} mobile is ${this.color} color`);
    //     }
    // }
    // let obj=new mobile('iphone 14 pro','blue');
    // obj.show();
    // console.log(obj.name);

//     let person={
//         fname:'satish',
//         lname:'shinde',
//         fulname:function(){
//             console.log(`my name is ${this.fname} ${this.lname}`);
//         }
//     }
//     let greeting=function(greet,symbol){
//        console.log(`${greet}  ${this.fname} ${this.lname} ${symbol}`);  
//     }
//    let temp=greeting.bind(person,'hello','!');
//    temp();
//       greeting.call(person,'hello','!');
//       greeting.apply(person,['hello','!']);
   
// function person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }
// person.prototype.fullname=function(){
//     console.log(`my name is ${this.fname} ${this.lname}`);
// }
// person.prototype.age=23;
// let obj=new person('satish','shinde');
// obj.fullname();
// console.log(obj.age);

// function supertype(){
//     this.name='satish';
// }
// supertype.prototype.getname=function(){
//     console.log(this.name);
// }
// function subtype(){
//     this.age=23;
// }
// subtype.prototype=new supertype();
// subtype.prototype.getage=function(){
//     console.log(this.age);
// }
// let obj=new subtype();
// obj.getname();
// obj.getage();

// class mobile{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }
//     show(){
//         return (`my ${this.name} mobile is ${this.color} color`);
//     }
// }
// class model extends mobile{
//     constructor(model){
//         super('note 10','blue');
//         this.model=model;
//     }
//     show1(){
//         console.log(this.show() +` with ${this.model}`);
//     }
// }
// let obj=new model('xyz');
// obj.show1();
// console.log(obj.name);

// let num=[12,23,34,56,78];
// let cheackelement=(n)=>{
//     if(num.includes(n)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let addelement=(n)=>{
//     num.push(n);
// }
// addelement(13);
// console.log(cheackelement(13));

// let sms={
//     send:function(){
//         console.log('sms send complete');
//     }
// }
// let email={
//     send:function(){
//         console.log('email send complete');
//     }
// }
// function show(preference){
//     preference.send();
// }
// show(email);
// show(sms);

// let pattern=/abc/;
// let pattern=RegExp(/abc/);
// let result=pattern.test('abcd');
// console.log(result);

// let pattern=new RegExp(/^s....h$/);
// let result=pattern.test('s12345h');
// console.log(result);

// let pattern=/^s....h$/;
// console.log(pattern.test('satish'));

// let pattern=new RegExp(/^s....h$/);
// console.log(pattern.test('satish'));

// let str='satish';
// let pattern=/ti/;
// console.log(pattern.test(str));
// console.log(pattern.exec(str));
// console.log(str.match(pattern));
// console.log(str.search(pattern));
// console.log(str.replace('ti','mi'));
// console.log(str.split(pattern));

// let str='Hello hello hello';
// console.log(str.replace(/hello/,'world'));
// console.log(str.replace(/hello/g,'world'));
// console.log(str.replace(/hello/i,'world'));
// console.log(str.replace(/hello/gi,'world'));

// let pattern=/([0-9]{2})[ ]([0-9]{10})/g
// console.log(pattern.test('91 9373434115'));

// function validate(number){
//     let pattern=/([0-9]{2})[ ]([0-9]{10})/g;
//     let result=pattern.test(number);
//     if(result){
//         console.log('number is valid');
//     }
//     else{
//         let num=prompt('enter a number : ');
//         validate(num);
//     }
// }
// let prompt=require('prompt-sync')();
// let number=prompt('enter a number : ');
// validate(number);

// function validate(email){
//     let pattern=/^\S+\@\S+\.\S+/g;
//     let result=pattern.test(email);
//     if(result){
//         console.log('email is valid');
//     }
//     else{
//         let num=prompt('enter a email : ');
//         validate(num);
//     }
// }
// let prompt=require('prompt-sync')();
// let email=prompt('enter a email : ');
// validate(email);

// let a=10,b=30;
// let c=a+b;
// debugger;
// console.log(c);

// let a=10,b=30;
// let c=a+b;
// console.log(c);

// function pure(name){
//   console.log(`hello ${name}`);
// }
// pure('satish');
// pure('raj');

// let greeting='hello ';
// function nonpure(name){
//     console.log(`${greeting} ${name}`);
// }
// nonpure('saytish')

// let sum=function(){
//     console.log('hello world');
// }
// sum();

// function show(){
//     console.log('hello world');
// }
// let temp=show;
// temp();

// let arr=[12,23,34,45];
// let result=arr.map(double);
// function double(n){
//     return n*2;
// }
// console.log(result);


// function show(){
//         console.log('hello world');
//     }
//     function returner(fn){
//        return fn;
//     }
//     let temp=returner(show);
//     temp();

// function show(){
//         console.log('hello world');
//     }
//     let arr=[12,23,show,45];
//     console.log(arr[1]);
//     arr[2]();

// let person={
    
// }
// console.log(person);
// person.name='satish';
// console.log(person.name);
// person.greet=function(){
//     console.log('hello world');
// }
// person.greet();

// function show(){

// }
// console.log(show);
// show.name='raj';
// console.log(show.name);
// show.greet=function(){
//     console.log('hello raj');
// }
// show.greet();

// function show(str){
//             console.log(str);
//         }
//         let delayedfun=function(fn){
//             return function(val,delay){
//                 setTimeout(function(){
//                     fn(val);
//                 },delay)
//             }
//         }
//         let temp=delayedfun(show)
//         temp('hello world',2000);

// function double(x){
//     return x*2;
// }
// let temp=double(2);
// console.log(temp);
// function sqr(x){
//     return x*x;
// }
// console.log(sqr(double(2)));
// console.log(sqr(temp));

// const person={
//     name:'satish',
//     id:25
// }
// console.log(person.id);
// person.id=30;
// console.log(person.id);
// Object.defineProperty(person,'id',{
//     value:20,
//     writable:false
// })
// console.log(person.id);
// person.id=18;
// console.log(person.id);
// Object.freeze(person);
// person.name='raj';
// console.log(person.name);

// let data={
//     country:'india'
// }

// function addstate(param,location){
//    return Object.assign({},param,{
//     location:location
//    })
// }
// console.log(addstate(data,'maharashtra'));
// console.log(data);

// var a=5;
// if(a){
//     var a=6;
//     console.log(a);
// }
// console.log(a);

// let a=5;
// if(a){
//     let a=6;
//     console.log(a);
// }
// console.log(a);

// const a=4;
// a=5;
// console.log(a);

// let sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(10,15));

// let sum=function(a=23,b=34){
//     return a+b;
// }
// console.log(sum(12));

// const person={
//     name:'satish',
//     id:25
// }
// let{name,id}=person;
// console.log(name);

// function show(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// show(1,2,3,4,5,6,7,8,9);

// let arr=[1,2,3,4,5];
// let arr1=[...arr];
// console.log(arr1);

// let mypromise=new Promise(function(resolve,reject){
//     setTimeout(() => {
//     reject('data not fetched sucessfully.');
//     }, 2000);
// })
// mypromise.then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'one');
// })
// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,'two');
// })
// Promise.race([promise1,promise2]).then((data)=>{
//     console.log(data);
// })

// 'use strict';
// a=5;
// console.log(a);

// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();

// function func2(){
//     for(let i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }
  
//   let getPower = hero.getPower;
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower());
//   console.log(getPower.apply(hero2));

//   let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
//   console.log(Object.keys(obj));
//   console.log(Object.entries(obj));

// function* genFunc(){
//     yield 3;
//     yield 4;
// }
// genFunc();
// genFunc().next();

// function* iteratorFunc() {
//     let count = 0;
//     for (let i = 0; i < 2; i++) {
//         count++;
//         yield i;
//     }
//     return count;
//   }
  
//   let iterator = iteratorFunc();
//   console.log(iterator.next()); // {value:0,done:false}
//   console.log(iterator.next()); // {value:1,done:false}
//   console.log(iterator.next());

// let num1=2;
// let num2=02;
// if(num1==num2)
//  console.log("true");
// else
//  console.log("false");

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = Person('Sarah', 'Smith');
//     console.log(lydia);
//     console.log(sarah);

//     const shape = {
//         radius: 10,
//         diameter() {
//         return this.radius * 2;
//         },
//         perimeter: () => 2 * Math.PI * this.radius,
//        };
       
//        console.log(shape.diameter());
//        console.log(shape.perimeter());

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
//    const member = new Person('Lydia', 'Hallie');
//    Person.prototype.getFullName = function() {
   
//    return `${this.firstName} ${this.lastName}`;
   
//    };
//    console.log(member.getFullName());

// var p = new Promise((resolve, reject) => {
//     reject(Error('Promise Fails!'))
//     })
//     p.catch(error => console.log(error.message))
//     p.catch(error => console.log(error.message))


//     async function f() {
//         let result = 'new!';
//         let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000);
//         });
//        result = await promise;
//        console.log(result);
//        }
       
//        f();


// let person1={
//     name:'satish',
//     id:25
// }
// let person2=person1;
// person2.name='raj';
// console.log(person1);
// console.log(person2);

// let person1={
//     name:'satish',
//     id:25,
//     address:{
//         city:'pune',
//         state:'maharashtra'
//     }
// }
// let person2={...person1};
// person2.address.city='mumbai';
// console.log(person1);
// console.log(person2);


// let person1={
//     name:'satish',
//     id:25,
//     address:{
//         city:'pune',
//         state:'maharashtra'
//     }
// }
// let person2=JSON.parse(JSON.stringify(person1));
// person2.address.city='mumbai';
// console.log(person1);
// console.log(person2);

// (function sum(name){
//     console.log(name);
// }());

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// function sum1(n){
//     return n*(n+1)/2;
// }
// console.log(sum1(10));

// function countdown(n){
//      console.log(n);
//     let newn=n+1;
//     if(newn<=10){
//       countdown(newn);
//     }
//     console.log(n);
// }
// countdown(1);


// let fact=1;
// function factorial(n){
//     for(let i=1;i<=n;i++){
//         fact*=i;
//     }
//     console.log(fact);
// }
// factorial(7);

// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// function sum(n){
//     if(n<=1){
//         return n;
//     }
//     return n+sum(n-1);
// }
// console.log(sum(10));

// let t1=0,t2=1,t3;
// console.log(t1);
// console.log(t2);
// for(i=2;i<=6;i++){
//     t3=t1+t2;
//     console.log(t3);
//     t1=t2;
//     t2=t3;
// }

// function fibonacci(n){
//     if(n<2){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// // console.log(fibonacci(7))
// for(let i=0;i<=5;i++){
//     console.log(fibonacci(i));
// }

// var fibonacci_series = function (n)
// {
//   if (n===1)
//   {
//     return [0, 1];
//   }
//   else
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };
//  console.log(fibonacci_series(8));

//  var gcd = function(a, b) {
//     if ( ! b) {
//         return a;
//     }
//     return gcd(b, a % b);
//  };
//  console.log(gcd(2154, 458));

// class stack{
//     constructor(capacity){
//         this.capacity=capacity;
//         this.arr=[];
//         this.top=-1;
//     }
//     push(item){
//         if(this.top==this.capacity-1){
//             return'stack overflow';
//         }
//         this.top++;
//         let add=this.arr[this.top]=item;
//         return add;
//     }
//     pop(){
//         if(this.top==-1){
//             return 'empty stack';
//         }
//         let de=this.arr[this.top];
//         this.top--;
//         return de;
//     }
//     peek(){
//         return this.arr[this.top];
//     }
//     isempty(){
//         return this.top==-1;
//     }
//     size(){
//         return this.top+1;
//     }
// }
// let Stack=new stack(4);
// console.log(Stack.push(10));
// console.log(Stack.push(20));
// console.log(Stack.push(30));
// console.log(Stack.push(40));
// console.log(Stack.pop());
// console.log(Stack.peek());
// console.log(Stack.pop());
// console.log(Stack.size());
// console.log(Stack.isempty());

// class queue{
//     constructor(capacity){
//         this.capacity=capacity;
//         this.arr=[];
//         this.front=0;
//         this.size=0;
//     }
//     enqueue(item){
//         if(this.size==this.capacity){
//             return 'queue is overflow';
//         }
//         this.rear=this.front+this.size-1%this.capacity;
//         this.rear=this.rear+1%this.capacity;
//         let add=this.arr[this.rear]=item;
//         this.size++;
//         return add;
//     }
//     dequeue(){
//         if(this.size==0){
//             return 'queue is empty';
//         }
//         let de=this.arr[this.front];
//         this.front=this.front+1%this.capacity;
//         this.size--;
//         return de;
//     }
//     getfront(){
//         return this.arr[this.front];
//     }
//     getrear(){
//         this.rear=this.front+this.size-1%this.capacity;
//         return this.arr[this.rear];
//     }
//     isempty(){
//         return this.size==0;
//     }
//     length(){
//         return this.size;
//     }
// }
// let obj=new queue(4);
// console.log(obj.enqueue(10));
// console.log(obj.enqueue(20));
// console.log(obj.enqueue(30));
// console.log(obj.enqueue(40));
// console.log(obj.dequeue());
// console.log(obj.getrear());
// console.log(obj.getfront());
// console.log(obj.isempty());
// console.log(obj.length());



// class queue{
//     constructor(capacity){
//         this.capacity=capacity;
//         this.arr=[];
//         this.front=-1;
//         this.size=-1;
//         this.rear=-1;
//     }
//     enqueue(item){
//         if(this.size==this.capacity-1){
//             return 'queue is overflow';
//         }
        
//         this.rear=this.rear+1;
//         let add=this.arr[this.rear]=item;
//         this.size++;
//         return add;
//     }
//     dequeue(){
//         if(this.size==-1){
//             return 'queue is empty';
//         }
//         this.front=this.front+1;
//         let de=this.arr[0];
//         for(let i=this.front;i<=this.rear;i++){
//             this.arr[i]=this.arr[i+1];
//         }
//         this.size--;
//         return de;
//     }
//     getfront(){
//         return this.arr[0];
//     }
//     getrear(){
//         return this.arr[this.size];
//     }
//     isempty(){
//         return this.size==-1;
//     }
//     length(){
//         return this.size+1;
//     }
// }
// let obj=new queue(4);
// console.log(obj.enqueue(10));
// console.log(obj.enqueue(20));
// console.log(obj.enqueue(30));
// console.log(obj.enqueue(40));
// console.log(obj.dequeue());
// console.log(obj.getrear());
// console.log(obj.getfront());
// console.log(obj.isempty());
// console.log(obj.length());

// let a=[10,20,30,40,50];
// for(let i=2;i<5;i++){
//     a[i]=a[i+1];
// }
// console.log(a);

// for(let i=5;i>2;i--){
//     a[i]=a[i-1];
// }
// a[2]=15;
// console.log(a);

// function bubble(arr){
// for(let i=0;i<arr.length;i++){
//     let sawped=false;
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             sawped=true;
//         }
//     }
//     if(!sawped){
//         break;
//     }
// }

// return arr;

// }
// let arr=[40,30,20,10];
// console.log(bubble(arr));

// function Selection(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i;
//         for(let j=i+1;j<arr.length;j++){
//            if(arr[j]<arr[min]){
//             min=j;
//            }
//         }
//         swap(arr,min,i);
//     }
//     return arr;
// }
// function swap(arr,min,i){
//   let temp=arr[min];
//   arr[min]=arr[i];
//   arr[i]=temp;
// }
// let arr=[40,30,20,10];
// console.log(Selection(arr));

// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i];
//         let j=i-1;
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }
//     return arr;
// }
// let arr=[40,30,20,10];
// console.log(insertion(arr));

// function mergesort(arr){
//     let half=arr.length/2;
//     if(arr.length<=1){
//         return arr;
//     }
//     let left=arr.splice(0,half);
//     let right=arr;
//     return merge(mergesort(left),mergesort(right));
// }
// function merge(left,right){
//  let sorted=[];
//  while(left.length&&right.length){
//     if(left[0]<right[0]){
//         sorted.push(left.shift());
//     }
//     else{
//         sorted.push(right.shift());
//     }
//     }
//     return [...sorted,...left,...right];
//  }
//  let arr=[40,30,20,10];
//   console.log(mergesort(arr));

// function quicksort(arr,left,right){
//     if(left<right){
//         let p=partition(arr,left,right);
//         quicksort(arr,left,p-1);
//         quicksort(arr,p+1,right);
//     }
// }
// function partition(arr,left,right){
//     let pivot=arr[right];
//     let i=left-1;
//     for(let j=left;j<right;j++){
//         if(arr[j]<pivot){
//             i++;
//             let temp=arr[j];
//             arr[j]=arr[i];
//              arr[i]=temp;
//         }
//     }
//     let temp=arr[i+1];
//     arr[i+1]=arr[right];
//     arr[right]=temp;
//     return i+1;
// }
// let arr=[7,5,40,30,20,10];
// quicksort(arr,0,arr.length-1);
// console.log(arr);

// function countingsort(arr,k){
//     let count=[];
//     for(let i=0;i<k;i++){
//         count[i]=0;
//     }
//     for(let i=0;i<arr.length;i++){
//             count[arr[i]]++;
//         }
//     for(let i=1;i<k;i++){
//         count[i]=count[i-1]+count[i];
//     }
//     let output=[];
//     for(let i=arr.length-1;i>=0;i--){
//         output[count[arr[i]]-1]=arr[i];
//         count[arr[i]]--;
//     }
//     for(let i=0;i<arr.length;i++){
//         arr[i]=output[i];
//     }
//     return arr;
// }
// let arr=[4,3,1,2,9,5,6,3,4,0];
// console.log(countingsort(arr,10));

// function radoxsort(arr){
//     let max=Math.max(...arr);
//     let exp=1;
//     while(exp<=max){
//         countingsort(arr,exp);
//         exp=exp*10;
//     }
// }
// function countingsort(arr,exp){
//     k=10;
//     let count=[];
//     for(let i=0;i<k;i++){
//         count[i]=0;
//     }
//     for(let i=0;i<arr.length;i++){
//         count[parseInt((arr[i]/exp)%10)]++;
//         }
//     for(let i=1;i<k;i++){
//         count[i]=count[i-1]+count[i];
//     }
//     let output=[];
//     for(let i=arr.length-1;i>=0;i--){
//         output[count[parseInt((arr[i]/exp)%10)]-1]=arr[i];
//         count[parseInt((arr[i]/exp)%10)]--;
//     }
//     for(let i=0;i<arr.length;i++){
//         arr[i]=output[i];
//     }
//     return arr;
// }
// let arr=[123,756,8659,32,22362,8769];
// radoxsort(arr);
// console.log(arr);

// function  linearserach(arr,element){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==element){
//            return 'element found';
//         }
//     }
//     return 'element not found';
// }
// let arr=[10,30,20,40,50];
// console.log(linearserach(arr,30));

// function binarysearch(arr,element){
//     let low=0;
//     let high=arr.length-1;
//     while(low<=high){
//         let mid=parseInt(low+high/2);
//         if(arr[mid]==element){
//             return `element found at : ${mid}`;
//         }
//         else if(arr[mid]>element){
//             right=mid-1;
//         }
//         else{
//             low=mid+1;
//         }
//     }
//     return -1;
// }
// let arr=[12,13,14,15,16];
// console.log(binarysearch(arr,18))

// class node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class singlelinkedlist{
//     constructor(head=null){
//         this.head=head;
//         this.tail=head;
//         if(this.head==null){
//             this.length=0;
//         }
//         else{
//             this.length=1;
//         }
//     }
//     prepend(value){
//         let newnode=new node(value);
//         if(this.head==null){
//             this.head=newnode;
//             this.tail=newnode;
//         }
//         newnode.next=this.head;
//         this.head=newnode;
//         this.length++;
//         return this;
//     }
//     append(value){
//         let newnode=new node(value);
//     if(this.head==null){
//         this.head=newnode;
//         this.tail=newnode;
//     }
//     this.tail.next=newnode;
//     this.tail=newnode;
//     this.length++;
//     return this;
//     }
//     insertat(value,index){
//         let newnode=new node(value);
//         if(index==0){
//             this.prepend(data);
//         }
//         let counter=0;
//         let current=this.head;
//         let previous;
//         while(counter<index){
//          previous=current;
//          current=current.next;
//          counter++;
//         }
//         previous.next=newnode;
//         newnode.next=current;
//         this.length++;
//          return this;
//     }
//     print(){
//         if(this.head==null){
//             console.log('empty list');
//         }
//         let current=this.head;
//         while(current!=null){
//             console.log(current.value);
//             current=current.next;
//         }
//     }
//         deleteatbegin(){
//             if(this.head==null){
//                 return head;
//                }
//                this.head=this.head.next;
//                this.length--;
//                return this;
//         }
//         deleteatlast(){
//             if(this.head==null){
//                 return head;
//             }
//             let current=this.head;
//             let previous;
//             while(current.next!=null){
//                 previous=current;
//                 current=current.next;
//             }
//             previous.next=null;
//             this.tail=previous;
//             this.length--;
//             return this;
//         }
//     daleteatindex(index){
//         if(index==0){
//             this.deleteatbegin();
//         }
//         let counter=0;
//         let current=this.head;
//         let previous;
//         while(index<counter){
//             previous=current;
//             current=current.next;
//             counter++;
//         }
//         previous.next=current.next;
//         this.length--;
//         return this;
//     }
//     gethead(){
//         return this.head.value;
//     }
//     gettail(){
//         return this.tail.value;
//     }
//     getatindex(data){
//        let counter=0;
//         let current=this.head;
//         while(current!=null){
//             if(data==current.value){
//                return `value found at : ${counter}`;
//             }
//             current=current.next;
//             counter++;
//       }
//      }
//      getsize(){
//         return this.length;
//      }
// }

// let newnode=new node(100);
// let obj=new singlelinkedlist(newnode);
// obj.prepend(200).prepend(300);
// obj.append(400).append(500);
// obj.deleteatbegin().deleteatlast();
// obj.print();
// console.log(obj.gethead());
// console.log(obj.gettail());
// console.log(obj.getsize());


// let newnode=new node(10);
// let obj=new singlelinkedlist(newnode);
// // obj.prepend(20).prepend(30).prepend(40).prepend(70).prepend(80);
// obj.insertatbegin(20).insertatbegin(30).insertatbegin(40).insertatbegin(70).insertatbegin(80);
// // obj.append(50).append(60).insertat(25,2);
// // obj.deleteatbegin();
// // obj.deleteatlast();
// // obj.deleteatindex(2);
// // obj.deletenodebyval(10);
// // obj.reverse();
// obj.print();


// class node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.prev=null;
//     }
// }
// class singlelinkedlist{
//     constructor(head=null){
//         this.head=head;
//         this.tail=head;
//         if(this.head==null){
//             this.length=0;
//         }
//         else{
//             this.length=1;
//         }
//     }
//     prepend(value){
//         let newnode=new node(value);
//         if(this.head==null){
//             this.head=newnode;
//             this.tail=newnode;
//         }
//         newnode.next=this.head;
//         this.head.prev=newnode
//         this.head=newnode;
//         this.length++;
//         return this;
//     }
//     append(value){
//         let newnode=new node(value);
//     if(this.head==null){
//         this.head=newnode;
//         this.tail=newnode;
//     }
//     this.tail.next=newnode;
//     newnode.prev=this.tail;
//     this.tail=newnode;
//     this.length++;
//     return this;
//     }
//     insertat(value,index){
//         let newnode=new node(value);
//         if(index==0){
//             this.prepend(data);
//         }
//         let counter=0;
//         let current=this.head;
//         let previous;
//         while(counter<index){
//          previous=current;
//          current=current.next;
//          counter++;
//         }
//         previous.next=newnode;
//         newnode.next=current;
//         newnode.prev=previous;
//         current.prev=newnode;
//         this.length++;
//          return this;
//     }
//     print(){
//         if(this.head==null){
//             console.log('empty list');
//         }
//         let current=this.head;
//         while(current!=null){
//             console.log(current.value);
//             current=current.next;
//         }
//     }
//         deleteatbegin(){
//             if(this.head==null){
//                 return head;
//                }
//                this.head=this.head.next;
//                this.length--;
//                return this;
//         }
//         deleteatlast(){
//             if(this.head==null){
//                 return head;
//             }
//             let current=this.head;
//             let previous;
//             while(current.next!=null){
//                 previous=current;
//                 current=current.next;
//             }
//             previous.next=null;
//             this.tail=previous;
//             this.length--;
//             return this;
//         }
//     daleteatindex(index){
//         if(index==0){
//             this.deleteatbegin();
//         }
//         let counter=0;
//         let current=this.head;
//         let previous;
//         while(index<counter){
//             previous=current;
//             current=current.next;
//             counter++;
//         }
//         previous.next=current.next;
//         this.length--;
//         return this;
//     }
//     gethead(){
//         return this.head.value;
//     }
//     gettail(){
//         return this.tail.value;
//     }
//     getatindex(value){
//        let counter=0;
//         let current=this.head;
//         while(current!=null){
//             if(current.value==value){
//                return `value found at : ${counter}`;
//             }
//             current=current.next;
//             counter++;
//       }
//      }
//      getsize(){
//         return this.length;
//      }
// }

// let newnode=new node(100);
// let obj=new singlelinkedlist(newnode);
// obj.prepend(200).prepend(300);
// obj.append(400).append(500);
// obj.deleteatbegin().deleteatlast();
// obj.print();
// console.log(obj.gethead());
// console.log(obj.gettail());
// console.log(obj.getsize());
// console.log(obj.getatindex(100));

