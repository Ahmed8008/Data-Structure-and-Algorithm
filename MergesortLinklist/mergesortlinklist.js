var Nodee = /** @class */ (function () {
    function Nodee(data) {
        this.data = data;
        this.next = null;
    }
    return Nodee;
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
var a = new Nodee(199);
var b = new Nodee(20);
var c = new Nodee(7);
var d = new Nodee(1);
var e = new Nodee(11);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
var Linkedlistobj = new Linkedlist();
Linkedlistobj.head = a;
var sizee = Linkedlistobj.size();
var midpoint = Math.ceil(Linkedlistobj.size() / 2);
function split(List) {
    var midpoint = Math.floor(List.size() / 2);
    var Linkedlistobj1 = new Linkedlist();
    var Linkedlistobj2 = new Linkedlist();
    var current = List.head;
    var temp = new Nodee(current.data);
    Linkedlistobj1.head = temp;
    var i = 0;
    while (i < midpoint) {
        Linkedlistobj1.insert(current.data, i);
        current = current.next;
        i++;
    }
    Linkedlistobj1.remove(i);
    var temp1 = new Nodee(current.data);
    Linkedlistobj2.head = temp1;
    i = 0;
    while (i <= midpoint && current != null) {
        Linkedlistobj2.insert(current.data, i);
        current = current.next;
        i++;
    }
    Linkedlistobj2.remove(i);
    return [Linkedlistobj1, Linkedlistobj2];
}
function mergesortLinklist(List) {
    var sorttedlinklist = new Linkedlist();
    var left = new Linkedlist();
    var right = new Linkedlist();
    if (List.size() <= 1) {
        return List;
    }
    var _a = split(List), firsthalf = _a[0], secondhalf = _a[1];
    left = mergesortLinklist(firsthalf);
    right = mergesortLinklist(secondhalf);
    sorttedlinklist = merge(left, right);
    return sorttedlinklist;
}
function merge(left, right) {
    var linklist1 = new Linkedlist();
    var i = 0;
    var currentleft = left.head;
    var currentright = right.head;
    var templeft = new Nodee(currentleft.data);
    var tempright = new Nodee(currentright.data);
    linklist1.head = templeft;
    linklist1.head = tempright;
    while (i < left.size() || i < right.size() && currentleft != null && currentright != null) {
        if (currentleft.data < currentright.data) {
            linklist1.insert(currentleft.data, i);
            currentleft = currentleft.next;
            i++;
        }
        else {
            linklist1.insert(currentright.data, i);
            currentright = currentright.next;
            i++;
        }
    }
    while (currentleft != null) {
        linklist1.insert(currentleft.data, i);
        currentleft = currentleft.next;
        i++;
    }
    while (currentright != null) {
        linklist1.insert(currentright.data, i);
        currentright = currentright.next;
        i++;
    }
    linklist1.remove(i);
    return linklist1;
}
var left = new Linkedlist();
var right = new Linkedlist();
var g = new Nodee(5);
var h = new Nodee(4);
var hh = new Nodee(1);
g.next = h;
h.next = hh;
left.head = g;
var k = new Nodee(3);
var j = new Nodee(2);
var ppo = new Nodee(1);
k.next = j;
j.next = ppo;
right.head = k;
var x = mergesortLinklist(Linkedlistobj);
console.log(x.toString());
//let y = merge()
