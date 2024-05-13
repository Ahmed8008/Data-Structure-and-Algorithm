var Nodee = /** @class */ (function () {
    function Nodee(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return Nodee;
}());
var a = new Nodee(10);
var b = new Nodee(11);
a.next = b;
//let b=new Nodee<number>(11)
//console.log(a)
//console.log(b)
var Linkedlist = /** @class */ (function () {
    function Linkedlist() {
        this.head = null;
        this.tail = null;
    }
    Linkedlist.prototype.size = function () {
        var current = this.head;
        var counnt = 0;
        while (current !== null) {
            counnt += 1;
            current = current.next;
        }
        return counnt;
    };
    Linkedlist.prototype.prepend = function (data) {
        var newnode = new Nodee(data);
        newnode.next = this.head;
        this.head = newnode;
    };
    Linkedlist.prototype.append = function (data) {
        var newnode1 = new Nodee(data);
        newnode1.next = this.tail;
        this.tail = newnode1;
    };
    Linkedlist.prototype.insert = function (data, index) {
        var new_node = new Nodee(data);
        var count = 0;
        var current = this.head;
        var previous;
        while (current !== null) {
            if (index == 0) {
                count - index;
                current.next = this.head;
                break;
            }
            else if (count == index) {
                index - count;
                new_node.next = current;
                previous.next = new_node;
                break;
            }
            count += 1;
            previous = current;
            current = current.next;
        }
    };
    /*
    public search(data){
      let array:Nodee<T>[]=[]
      let notinthelist:boolean = true;
      let current=this.head
      while(current!=null)  {
        if(current.data==data)
        {
            array.push(current);
            notinthelist = false;
        }
        current=current.next
        }
       if(notinthelist==true){
  
        return "Not present in the linklist"
  
       }
  
       else
       {
        return array
       }
  
  
      }
      */
    Linkedlist.prototype.remove = function (index) {
        var count = 0;
        var current = this.head;
        var previous;
        while (current != null) {
            if (count == index) {
                previous.next = current.next;
            }
            count += 1;
            previous = current;
            current = current.next;
        }
    };
    Linkedlist.prototype.toString = function () {
        var result = '';
        var current = this.head;
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += "null";
        return result;
    };
    return Linkedlist;
}());
var Linkedlistobj = new Linkedlist();
Linkedlistobj.size;
Linkedlistobj.head = a;
//console.log(Linkedlistobj)
Linkedlistobj.insert(9, 0);
Linkedlistobj.insert(20, 1);
Linkedlistobj.insert(17, 2);
//Linkedlistobj.remove(1)
//console.log(Linkedlistobj)
//console.log(Linkedlistobj.search(69))
//Linkedlistobj.remove(1)
console.log(Linkedlistobj.toString());
//console.log(maxsum)
