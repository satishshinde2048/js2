class stack{
    constructor(capasity){
        this.arr=[];
        this.top=-1;
        this.capasity=capasity;
    }
    push(value){
        if(this.top==this.capasity-1){
            return "stack is overflow";
        }
       this.top++;
       let add=this.arr[this.top]=value;
       return add;
    }
    pop(){
        if(this.top==-1){
            return 'stack is empty';
        }
        let remove=this.arr[this.top];
        this.top--;
        return remove;
    }
    peek(){
        return this.arr[this.top];
    }
    size(){
         return this.top+1;
    }
    isempty(){
        return this.top==-1;
    }
}
let obj=new stack(4);
console.log(obj.push(12));
console.log(obj.push(13));
console.log(obj.push(14));
console.log(obj.push(15));
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.size());
console.log(obj.isempty());