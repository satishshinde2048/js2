// let arr=[12,2,3,45,34,67];
// arr.push(55);
// console.log(arr);
// arr.unshift(11);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr[5]=68;
// console.log(arr);
// arr.splice(2,0,23,89);
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);

// let arr1=[12,2,3,45,34,67];
// console.log(arr1);
// function insert(arr,index){
// for(let i=arr.length-1;i>=index;i--){
//         arr1[i+1]=arr1[i];
// }
//         arr[index]=21;
//        return arr;

// }
// console.log(insert(arr1,2));

// function insert1(arr,index){
//      arr[arr.length]=arr[index];
//      arr[index]=56;
//      return arr;
// }
// console.log(insert1(arr1,2));


// arr1=[12,2,3,45,34,67];
// function remove(arr,index){
//     for(let i=index+1;i<arr.length;i++){
//         arr[i-1]=arr[i];
//     }
//     arr.pop();
//     return arr;
// }
// console.log(remove(arr1,2))

// arr1=[12,2,3,45,34,67];
// function remove1(arr,index){
//         arr[index]=arr[arr.length-1]
//         arr.pop();
//     return arr;
// }
// console.log(remove1(arr1,2))

// arr1=[12,2,3,45,34,67];

// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// function search(arr,element){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==element){
//             console.log('element present');
//         }
        
//     }
//     // console.log('element not present');
// }
// search(arr1,10);

class array{
    constructor(){
        this.arr=[];
    }
    insert(value,index){
    if(index==0){
       this.arr.unshift(value);
       return this.arr;
    }
    else if(index==this.arr.length-1){
          this.arr.push(value);
          return this.arr;
    }
    else{
     for(let i=this.arr.length-1;i>=index;i--){
        this.arr[i+1]=this.arr[i];
     }
     this.arr[index]=value;
     return this.arr
    }
    }
    remove(index){
        if(index==0){
            this.arr.shift();
           return this.arr;

        }
        else if(index==this.arr.length-1){
            this.arr.pop();
            return this.arr;
        }
        else{
            for(let i=index+1;i<this.arr.length;i++){
                this.arr[i-1]=this.arr[i];
            }
            this.arr.pop();
            return this.arr;
        }
    }
}

let obj=new array();
console.log(obj.insert(12,0));
console.log(obj.insert(15,1));
console.log(obj.insert(16,2));
console.log(obj.insert(18,1));
console.log(obj.remove(0));
console.log(obj.remove(2));
console.log(obj.insert(17,2));
console.log(obj.insert(19,3));
console.log(obj.remove(1));