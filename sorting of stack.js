// Given a stack of size n , your task is to sort a stack using another stack by
//  using the function sortstack()

// Example 1:
// Input:
// const arrToSort = [98, 88, 3, 69, 55]

// Output:
// [3, 55, 69, 88, 98]

// Explanation:
// The output array has been sorted using another stack.
const arrToSort = [98, 88, 3, 69, 55];
function sort(input){
    let stack=[];
    while(input.length>0){
        let temp=input.pop();
        while(stack.length>0&&stack[stack.length-1]>temp){
            input.push(stack[stack.length-1]);
            stack.pop();
        }
        stack.push(temp);
    }
  return stack;
}
console.log(sort(arrToSort));