var Nodee = /** @class */ (function () {
    function Nodee(data) {
        this.data = data;
        this.next = null;
    }
    return Nodee;
}());
//let b=new Nodee<number>(11)
//console.log(a)
//console.log(b)
var taha = /** @class */ (function () {
    function taha() {
        this.head = null;
    }
    taha.prototype.toString = function () {
        var result = '';
        var current = this.head;
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += "null";
        return result;
    };
    return taha;
}());
var Linkedlist = /** @class */ (function () {
    function Linkedlist() {
        this.head = null;
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
    Linkedlist.prototype.insert = function (data, index) {
        var new_node = new Nodee(data);
        var count = 0;
        var current = this.head;
        var previous;
        while (current !== null) {
            if (index == 0) {
                this.head = new_node;
                new_node.next = current;
                break;
            }
            else if (count == index) {
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
        var notfound = true;
        while (current != null) {
            if (index == 0) {
                this.head = current.next;
                notfound = false;
                break;
            }
            else if (count == index) {
                previous.next = current.next;
                notfound = false;
            }
            count += 1;
            previous = current;
            current = current.next;
        }
        if (notfound == true) {
            console.log("Number is not found in the link list");
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
    Linkedlist.prototype.max_productanddata = function () {
        var current = this.head;
        var array = [];
        var counnt = 0;
        var a;
        var b;
        var c = 0;
        while (current !== null) {
            a = current.data;
            b = counnt * a;
            array.push(b);
            counnt += 1;
            current = current.next;
        }
        console.log(array);
        for (var i = 0; i < array.length; i++) {
            if (c < array[i]) {
                c = array[i];
            }
        }
        return c;
    };
    Linkedlist.prototype.min_num = function () {
        var current = this.head;
        var count = 0;
        var a = Infinity;
        var b;
        var minnumber;
        while (current !== null) {
            b = current.data;
            if (a > b) {
                a = b;
            }
            count = count + 1;
            current = current.next;
        }
        return a;
    };
    return Linkedlist;
}());
function countchar() {
    var current = tahaobj.size();
    var current1 = Linkedlistobj.size();
    if (current > current1) {
        return tahaobj;
    }
    else {
        return Linkedlistobj;
    }
}
var a = new Nodee("A");
var b = new Nodee("H");
var c = new Nodee("M");
var d = new Nodee("E");
var e = new Nodee("D");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
var f = new Nodee("T");
var g = new Nodee("A");
var h = new Nodee("H");
var I = new Nodee("A");
f.next = g;
g.next = h;
h.next = I;
var Linkedlistobj = new Linkedlist();
Linkedlistobj.head = a;
var tahaobj = new Linkedlist();
tahaobj.head = f;
//console.log(a);
//console.log(Linkedlistobj)
//Linkedlistobj.prepend(9)
//Linkedlistobj.prepend(69)
//Linkedlistobj.insert("m",2)
//Linkedlistobj.insert("e",3)
//Linkedlistobj.insert("d",4)
//console.log(Linkedlistobj)
//console.log(Linkedlistobj.search(69))
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(0)
//Linkedlistobj.remove(0)
//Linkedlistobj.remove(1)
//Linkedlistobj.remove(2)
console.log(Linkedlistobj.toString());
console.log(tahaobj.toString());
console.log(countchar().toString());
//console.log(Linkedlistobj.min_num())
//console.log(Linkedlistobj.max_productanddata())
//console.log(f)
//console.log(maxsum)
