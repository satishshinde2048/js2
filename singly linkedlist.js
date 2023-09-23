class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class singlelinked{
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
    print(){
        if(this.head==null){
            console.log('empty list');
        }
        let current=this.head;
        while(current!=null){
            console.log(current.value);
            current=current.next;
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
        this.length++;
        return this;
    }
 
    deleteatbegin(){
       if(this.head==null){
        return head;
       }
     this.head=this.head.next;
     this.length--;
    }
    deleteatlast(){
        if(this.head==null){
            return head;
           }
         let current=this.head;
         let previous;
         while(current.next!=null){
            previous=current;
            current=current.next;
         }  
         this.tail=previous;
         previous.next=null;
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
        this.length--;
        return this;
    }
    deletenodebyval(value){ 
        let current=this.head.next;
        let previous=this.head;
        while(current!=null){
            if(current.value===value){
                previous.next=current.next;
                break;
            }
            previous=previous.next;
            current=current.next;
        }
        
        this.length--;
        return this;
    }
    gethead(){
        return this.head.value;
    }
    getlast(){
        return this.tail.value;
    }
    getsize(){
        return this.length;
    }
    search(value){
        let current=this.head;
        while(current!=null){
            if(current.value==value){
                return ('value found');
            }
            current=current.next;
        }
        return 'not found';
    }
    reverse(){
        let first=this.head;
        this.tail=this.head;
        let second=first.next;
        while(second){
            let temp=second.next;
            second.next=first;
            first=second;
            second=temp;
        }
        this.head.next=null;
        this.head=first;
    }
}
let newnode=new node(10);
let obj=new singlelinked(newnode);
obj.insertatbegin(20).insertatbegin(30).insertatbegin(40).insertatbegin(70).insertatbegin(80);
// obj.append(50).append(60).insertat(25,2);
// obj.deleteatbegin();
// obj.deleteatlast();
// obj.deleteatindex(2);
// obj.deletenodebyval(10);
// obj.reverse();
obj.print();
// console.log(obj.gethead());
// console.log(obj.getlast());
// console.log(obj.getsize());
// console.log(obj.search(10));
// console.log(obj.search(15));
// obj.reverse();
// obj.print();