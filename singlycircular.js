class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class singlycircular{
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
        this.head=newnode;
        this.tail.next=this.head;
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
        this.tail=newnode;
        this.tail.next=this.head;
        this.length++;
        return this;
    }
    insertat(value,index){
        let newnode=new node(value);
        if(index==0){
            this.insertatbegin(value);
        }
        let counter=0;
        let current=this.head;
        let previous;
        while(counter<index){
            previous=current;
            current=current.next;
            counter++;
        }
        newnode.next=current;
        previous.next=newnode;
        this.tail.next=this.head;
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
         this.tail.next=this.head;
         this.length--;
         return this;
    }
    deleteatindex(index){
        if(index==0){
            this.deleteatbegin();
        }
        let counter=0;
        let current=this.head;
        let previous;
        while(counter<index){
         previous=current;
         current=current.next;
         counter++;
        }
        previous.next=current.next;
        this.tail.next=this.head;
        this.length--;
        return this;
    }
    
    gethead(){
        return this.head.value;
    }
    getlast(){
        return this.tail.next.value;
       
    }
    getsize(){
        return this.length;
    }
}
let newnode=new node(10);
let obj=new singlycircular(newnode);
obj.insertatbegin(20).insertatbegin(30).insertatbegin(40).insertatbegin(70).insertatbegin(80);
obj.append(50).append(60).insertat(25,2);
obj.deleteatbegin();
obj.deleteatlast();
obj.deleteatindex(2);
obj.print();
console.log(obj.gethead());
console.log(obj.getlast());
console.log(obj.getsize());
