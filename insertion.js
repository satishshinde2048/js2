function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
return arr;
}
let arr1=[40,30,20,10];
console.log(insertion(arr1));


