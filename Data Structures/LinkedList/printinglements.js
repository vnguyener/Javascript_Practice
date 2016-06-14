// in java
// void Print(Node head) {
//     Node temp = head;

//     while(temp != null) {
//         System.out.println(temp.data);
//         temp = temp.next;
//     }

// }



function print(list) {
    var temp = list.head
    while(temp != null) {
        console.log(temp.next)
        temp = temp.next;
    }   
}

function LinkedList(){  
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);


print(sll);