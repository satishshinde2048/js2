class queue{
    constructor(capasity){
        this.arr=[];
        this.size=0;
        this.front=0;
        this.capasity=capasity;
    }
    enqueue(value){
     if(this.size==this.capasity){
         return "queue is overflow";
     }
     this.rear=this.front+this.size-1%this.capasity;
     this.rear=this.rear+1%this.capasity;
     let add=this.arr[this.rear]=value;
     this.size=this.size+1;
     return add;
    }
    dequeue(){
        if(this.size==0){
            return "queue is empty";
        }
        let remove=this.arr[this.front];
        this.front=this.front+1%this.capasity;
        this.size=this.size-1;
        return remove;
    }
    getrear(){
      this.rear=this.front+this.size-1%this.capasity;
      return this.arr[this.rear];
    }
    getfront(){
       return this.arr[this.front];
    }
    isfull(){
        return this.size==this.capasity;
    }
    isempty(){
        return  this.size==0;
    }
}
let obj=new queue(4);
console.log(obj.enqueue(14));
console.log(obj.enqueue(15));
console.log(obj.enqueue(16));
console.log(obj.enqueue(17));
console.log(obj.dequeue());
console.log(obj.dequeue());
console.log(obj.getrear());
console.log(obj.getfront());
console.log(obj.isempty());
console.log(obj.isfull());