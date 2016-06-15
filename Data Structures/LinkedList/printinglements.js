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

LinkedList.prototype.remove = function(node) {
    var current, value = node.value;

    if(this.head !== null) {
        if(this.head === node) {
            this.head = this.head.next;
            node.next = null;
            return value;
        }
        current = this.head;
        while(current.next) {
            if(current.next === node) {
                current.next = node.next;
                return value;
            }
            current = current.next;
        }
    }
}

  var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);


print(sll);