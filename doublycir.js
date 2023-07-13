class node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class doublylinked{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        if(this.head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }
    insertatbegin(value){
        let newnode=new node(value);
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
        }
        newnode.next=this.head;
        this.head.prev=newnode;
        this.head=newnode;
        this.tail.next=this.head;
        this.head.prev=this.tail;
        this.length++;
        return this;
    }
    append(value){
        let newnode=new node(value);
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
        }
        this.tail.next=newnode;
        newnode.prev=this.tail;
        this.tail=newnode;
         this.tail.next=this.head;
        this.head.prev=this.tail;
        this.length++;
        return this;
    }
   
    print(){
        if(this.head==null){
            console.log('empty list');
        }
        let counter=0;
        let current=this.head;
        while(counter<this.length){
            console.log(current.value);
            current=current.next;
            counter++;
        }
    }
    deleteatbegin(){
       if(this.head==null){
        return head;
       }
     this.head=this.head.next;
     this.tail.next=this.head;
        this.head.prev=this.tail;
     this.length--;
    }
    deleteatlast(){
        if(this.head==null){
            return head;
           }
           let counter=0;
         let current=this.head;
         let previous;
         while(counter<this.length){
            previous=current;
            current=current.next;
            counter++;
         }  
         this.tail=previous;
         previous.next=null;
         this.tail.next=this.head;
        this.head.prev=this.tail;
         this.length--;
         return this;
    }
   
}
let newnode=new node(10);
let obj=new doublylinked(newnode);
obj.insertatbegin(20).insertatbegin(30).insertatbegin(40).insertatbegin(70).insertatbegin(80);
obj.append(50).append(60);
obj.deleteatbegin();
obj.deleteatlast();
obj.print();
// console.log(obj.gethead());
// console.log(obj.getlast());
// console.log(obj.getsize());



