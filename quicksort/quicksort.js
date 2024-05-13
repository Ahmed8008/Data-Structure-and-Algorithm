function quicksort(a) {
    if (a.length <= 1) {
        return a;
    }
    var Lessthenpivot = [];
    var Greaterthenpivot = [];
    var pivot = a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i] <= pivot) {
            Lessthenpivot.push(a[i]);
        }
        else {
            Greaterthenpivot.push(a[i]);
        }
    }
    return quicksort(Lessthenpivot).concat(pivot, quicksort(Greaterthenpivot));
}
var x = [700, 7, 9, 2, 0, 67, 28, 1, 99];
console.log(quicksort(x));
