var Nodee = /** @class */ (function () {
    function Nodee(data) {
        this.data = data;
        this.next = null;
    }
    return Nodee;
}());
var Linklist = /** @class */ (function () {
    function Linklist() {
        this.head = null;
    }
    Linklist.prototype.toString = function () {
        var result = '';
        var current = this.head;
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += "null";
        return result;
    };
    Linklist.prototype.prepend = function (data) {
        var newnode = new Nodee(data);
        newnode.next = this.head;
        this.head = newnode;
    };
    Linklist.prototype.insert = function (data, index) {
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
    Linklist.prototype.remove = function (index) {
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
    Linklist.prototype.size = function () {
        var current = this.head;
        var counnt = 0;
        while (current !== null) {
            counnt += 1;
            current = current.next;
        }
        return counnt;
    };
    return Linklist;
}());
function split(Linklistobj) {
    var midpoint = Math.floor(sizee / 2);
    var Linklistobj1 = new Linklist();
    Linklistobj1.head = a;
    var Linklistobj2 = new Linklist();
    var current = this.head;
    var previous;
    var count = 0;
    for (var i = 0; i < midpoint; i++) {
        if (count == midpoint) {
            previous.next = current.next;
        }
        count = count + 1;
        previous = current;
        current = current.next;
    }
    console.log(Linklistobj1.toString());
}
var a = new Nodee(10);
var b = new Nodee(9);
var c = new Nodee(8);
var d = new Nodee(7);
var e = new Nodee(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
var Linklistobj = new Linklist();
Linklistobj.head = a;
var sizee = Linklistobj.size();
c; //onsole.log(sizee)
split(Linklistobj);
console.log(Linklistobj.toString());
