
function radix(arr){
    let max=Math.max(...arr);
    let exp=1;
    while(exp<=max){
        counting(arr,exp);
        exp*=10;
    }
function counting(arr,exp){
    let k=10;
    let count=[];
    for(let i=0;i<k;i++){
    count[i]=0;
    }
    for(let i=0;i<arr.length;i++){
        count[parseInt((arr[i]/exp)%10)]++; 
      }
      for(let i=1;i<k;i++){
     count[i]=count[i-1]+count[i];
      }
       let output=[];
       for(let i=arr.length-1;i>=0;i--){
        output[count[parseInt((arr[i]/exp)%10)]-1]=arr[i];
        count[parseInt((arr[i]/exp)%10)]--;
       }
       for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
       }
}
return arr;
}
let arr1=[534,234,3537,355,7477,4787];
//radix(arr1);
console.log(radix(arr1));

