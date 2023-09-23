function binary(arr,element){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==element){
            return mid;
        }
        else if(arr[mid]>element){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }

    return -1;
}
let arr1=[10,20,30,40,50];
console.log(binary(arr1,70))