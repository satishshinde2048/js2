function bubblesort(arr){
    for(let i=0;i<arr.length-1;i++){
        let isswap=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isswap=true;
            }
        }
        if(!isswap){
            break;
        }
    }
    return arr;
}
let arr1=[40,30,20,10];
console.log(bubblesort(arr1));
 arr1=[40,10,20,30];
console.log(bubblesort(arr1));