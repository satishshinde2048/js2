function mergesort(arr){
    let half=arr.length/2;
    if(arr.length<=1){
        return arr;
   }
 let left=arr.splice(0,half);
 let right=arr;
 return merge(mergesort(left),mergesort(right));
}
function merge(left,right){
    let sortedarr=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedarr.push(left.shift());
        }
        else{
            sortedarr.push(right.shift());
        }
    }
    return [...sortedarr,...left,...right];
}
let arr1=[40,30,20,10];
console.log(mergesort(arr1));