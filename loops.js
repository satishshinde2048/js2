//for lop=>**************

// let temp='';
// for(let i=0;i<=5;i++){
//     temp+=i;
// }
// console.log(temp);


// for(let i=0;i<=5;i++){
//     console.log(i);
// }

// for(let i=0;i<=5;i++){
//     console.log('i love js');
// }

// let i=0;
// for(;i<=5;i++){
//     console.log(i);
// }

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

//  sum=0;
// for(let i=10;i>=1;i--){
//     sum+=i;
// }
// console.log(sum);

//infinite for loop=>********************
// for (let i=1;i>0;i++){
//     console.log(i);
// }

//string***********
// let name='satish';
// let text='';
// for(let i=0;i<name.length;i++){
//     text+=name[i];
// }
// console.log(text);

// for(let i=name.length-1;i>=0;i--){
//     text+=name[i];
// }
// console.log(text);

//array=>***************
// let array=[12,2,3,45,56];
// let text='';
// for(let i=0;i<array.length;i++){
//     text+=array[i];
// }
// console.log(text);

//for in=>
// let person={
//     name:'satish',
//     id:25
// }
// for (let key in person){
//     console.log(person[key]);
//     console.log(key);
// }

//string***********
// let name='satish';
// let text='';
// for(let i in name){
//     text+=name[i];
// }
// console.log(text);

//array=>***************
// let array=[12,2,3,45,56];
// let text='';
// for(let i in array){
//     text+=array[i];
// }
// console.log(text);

//for of=>***************

//array=>*************
// let arr=[12,3,4,56,67];
// for(let i of arr){
//     console.log(i);
// }

// //string***************
// let str='satish';
// for(let i of str){
//     console.log(i);
// }

// //set**********
// let number=new Set([15,67,89,45]);
// for(let i of number){
//     console.log(i);
// }

//  //map**************

// let fruit=new Map([['mango',200],['banana',600],['grapes',300]]);
// for(let i of fruit){
//     console.log(i);
// }

//while loop=>
let i=0;
while(i<=10){
    console.log(i);
    i++;
}

let sum=0;
i=1;
while(i<=10){
  sum+=i;
  i++;
}
console.log(sum);

//do while***************
let n=0;
do{
    console.log(n);
    n++
}while(n<=10);

let m=1;
let sum1=0;
do{
    sum1+=m;
    m++;
}while(m<=10);
console.log(sum1);

//break statement:***********
for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}

i=1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}

//break with nested loop=>
loop1:
for (let i=1;i<=3;i++){
   loop2: 
    for(let j=1;j<=3;j++){
        if(i==2&&j==2){
            continue loop2;
        }
        console.log(i,j);
    }
}


//print odd number by using continue=>
for(let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}


 n=22;
 for(let i=1;i<n;i++){
    if(i%2==0)
    console.log(i);
 }