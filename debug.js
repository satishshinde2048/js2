let a=25;
let b=55;
let result=a+b;
console.log(result);

//problem=>************************


// Write a JavaScript program to test whether the first character of a string is uppercase 
// or not using regular expressions.

// Example 1:
// Input:
// const str = 'def'

// Output:
// false
const str = 'def'
let pattern=/^[A-Z]/;
 result=pattern.test(str);
 console.log(result);


//  Write a JavaScript function to check whether a given value is alphanumeric or not.

// Example 1:
// Input:
// is_alphaNumeric("37828sad");

// Output:
// true

// Explanation:
// This string contains all the alphabets from 
// a-z, A-Z, and the number from 0-9. Therefore, it is an alphanumeric string.

// Example 2:
// Input:
// is_alphaNumeric("3243#$sew");

// Output:
// false

// Explanation:
// This string contains all the alphabets from a-z, A-Z, and the number from
//  0-9 along with some special symbols. Therefore, it is not an alphanumeric string.
function is_alphaNumeric(n){
    let pattern1=/^[0-9]+[a-zA-Z]+$/;
    let res=pattern1.test(n);
    return res;
}
console.log(is_alphaNumeric("3243#$sew"));


// Write a JavaScript function to count the number of vowels in a given string.

// Example 1:
// Input:
// vowel_count('The quick brown fox jumps over the lazy dog');

// Output:
// 11

// Explanation:
// Write a function vowel_count(), passing the string to it and counting the number of vowels and printing it out.
function vowel_count(str){
    let pattern2=/[aioeuAIOEU]/gi;
    let res1=str.match(pattern2).length;
    return res1;

}
console.log(vowel_count('The quick brown fox jumps over the lazy dog'));


// Write a JavaScript function to check whether a given value is hexcolor value or not.

// Example 1:
// Input:
// is_hexcolor("#444");

// Output:
// true

// Explanation:
// A hex color contains the alphabets from (A-F) and number from (0-9) and is of length 3 or 6. 
// Since, the string satisfies these parameters, hence we get true as output.

// Example 2:
// Input:
// is_hexcolor("#3333");

// Output:
// false

// Explanation:
// A hex color contains the alphabets from (A-F) and number from (0-9) and is of length 3 or 6.
//  Since, the string has 4 characters, hence we get false as output.
function is_hexcolor(str){
    let pattern3=/^#?([0-9a-fA-F{3}]|[0-9a-fA-F]{6})/;
    let res1=pattern3.test(str);
    return res1;
}
console.log(is_hexcolor("#444"));