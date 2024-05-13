function sort(a) {
    var min = 0;
    var sortedArray = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[i] < a[j]) {
                min = a[i];
                sortedArray.splice(min, i);
            }
        }
    }
    return sortedArray;
}
var x = sort([10, 9, 8, 7, 4, 6, 19]);
console.log(x);
