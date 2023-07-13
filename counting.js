function counting(arr,k){
    let count=[];
    for(let i=0;i<k;i++){
        count[i]=0;
    }
    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
    }
    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }
    let output=[];
    for(let i=arr.length-1;i>=0;i--){
     output[count[arr[i]]-1]=arr[i];
     count[arr[i]]--;
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
    }
    return arr;
}
let arr1=[40,0,30,20,10];
console.log(counting(arr1,41));

