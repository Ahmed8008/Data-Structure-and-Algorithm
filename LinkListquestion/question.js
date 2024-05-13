var array = [4, 5, 2, 5, 1];
var maxproduct;
var newarray = [];
var a = 0;
for (var i = 0; i < array.length; i++) {
    maxproduct = array[i] * i;
    newarray.push(maxproduct);
    if (a < newarray[i]) {
        a = newarray[i];
    }
}
console.log(newarray);
console.log(a);
