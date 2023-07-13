function linear(arr,element){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==element){
        return 'element found';
    }
  }
  return 'element not found';
}
let arr1=[12,3,45,6,78];
console.log(linear(arr1,45))