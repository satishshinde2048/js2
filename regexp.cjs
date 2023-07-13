let prompt =require('prompt-sync')();
let string;
string=prompt('enter a string:');
console.log(string);
let pattern;
pattern=/^s....h$/;
let result;
result=pattern.test(string);
console.log(result);
string=prompt('enter a string:');
pattern=/abc/;
result=pattern.test(string);
console.log(result);

//another way to crete reegex=>
string=prompt('enter a string:');
pattern=new RegExp(/abc/);
result=pattern.test(string);
console.log(result);

//regex method=>************
let string1='find me';
let pattern1;
pattern1=/me/;
result=pattern1.test(string1);
console.log(result);

pattern1=/me/;
result=pattern1.exec(string1);
console.log(result);

pattern1=/me/;
result=string1.match(pattern1);
console.log(result);

pattern1=/me/;
result=string1.search(pattern1);
console.log(result);

pattern1=/me/;
result=string1.replace(pattern1,'satish');
console.log(result);

pattern1=/[\s,]/;
result=string1.split(pattern1);
console.log(result);

//flags=>*********
const string2 = 'Hello hello hello';
result=string2.replace(/hello/,'world');
console.log(result);

result=string2.replace(/hello/g,'world');
console.log(result);

result=string2.replace(/hello/i,'world');
console.log(result);

result=string2.replace(/hello/gi,'world');
console.log(result);

//validating phone number=>
function validateno(no){
    let pattern2=/^([0-9]{2})[ ]?([0-9]{10})/;
   let res= pattern2.test(no)
    if(res){
        console.log('number is valid');
    }
    else{
        let newno=prompt('enter a number');
        validateno(newno);
    }
}
let no;
no=prompt('enter a number');
validateno(no);

//validing email=>***************
function validateem(email){
    let pattern3=/^\S+@\S+\.\S+/;
   let res1= pattern3.test(email)
    if(res1){
        console.log('email is valid');
    }
    else{
        let newem=prompt('enter a email');
        validateem(newem);
    }
}
let email;
no=prompt('enter a email');
validateem(email);