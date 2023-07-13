class queue{
    constructor(capasity){
        this.arr=[];
        this.size=-1;
        this.rear=-1;
        this.front=-1;
        this.capasity=capasity;
    }
    enqueue(value){
        if(this.size==this.capasity-1){
            return 'queue is overflow';
        }
        this.rear=this.rear+1;
        let add=this.arr[this.rear]=value;
        this.size++;
        return add;
    }
   dequeue(){
    this.front=this.front+1;
    let remove=this.arr[0];
    for(let i=this.front;i<=this.rear;i++){
        this.arr[i]=this.arr[i+1];
    }
    this.size--;
    return remove;
   }
   getrear(){
    return this.arr[this.rear];
   }
   getfront(){
    return this.arr[0];
   }
   isfull(){
    return this.size==this.capasity-1;
   }
   isempty(){
    return this.size==-1;
   }
}
let obj=new queue(4);
console.log(obj.enqueue(10));
console.log(obj.enqueue(20));
console.log(obj.enqueue(30));
console.log(obj.enqueue(40));
console.log(obj.dequeue());
console.log(obj.dequeue());
console.log(obj.enqueue(50));
console.log(obj.getfront());
console.log(obj.getrear());
console.log(obj.isempty());
console.log(obj.isfull());