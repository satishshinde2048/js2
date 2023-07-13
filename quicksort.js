function quicksort(arr,left,right){
    if(left<right){
        let p=partition(arr,left,right);
        quicksort(arr,left,p-1);
        quicksort(arr,p+1,right);
    }
}
function partition(arr,left,right){
    let pivot=arr[right];
    let i=left-1;
    for(let j=left;j<right;j++){
      if(arr[j]<pivot){
        i++;
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
      }
    }
    let temp=arr[i+1];
    arr[i+1]=arr[right];
    arr[right]=temp;
    return i+1;
}
let arr1=[7,5,40,30,20,10];
console.log(arr1);
quicksort(arr1,0,arr1.length-1);
console.log(arr1);