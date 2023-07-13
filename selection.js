function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
    }
    swap(arr,min,i);
}
return arr;
}
function swap(arr,min,i){
    let temp=arr[min];
   arr[min]=arr[i];
    arr[i]=temp;
}
let arr1=[40,30,20,10];
console.log(selection(arr1));