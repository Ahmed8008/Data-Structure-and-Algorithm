function mergeSort(array) {
    "This function have time complexity of O(n log(n))";
    var sortedArray;
    var left;
    var right;
    if (array.length <= 1) {
        return array;
    }
    var _a = splitArray(array), firstHalf = _a[0], secondHalf = _a[1];
    left = mergeSort(firstHalf);
    right = mergeSort(secondHalf);
    sortedArray = merge(left, right);
    return sortedArray;
}
function merge(left, right) {
    "This function have time complexity of O(n)";
    var array1 = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array1.push(left[i]);
            i++;
        }
        else {
            array1.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        array1.push(left[i]);
        i++;
    }
    while (j < right.length) {
        array1.push(right[j]);
        j++;
    }
    return array1;
}
function splitArray(array) {
    "This function have time complexity of O(n)";
    var midpoint = Math.floor(array.length / 2);
    var array1 = [];
    var array2 = [];
    for (var i = 0; i < midpoint; i++) {
        array1.push(array[i]);
    }
    midpoint = Math.ceil(array.length / 2);
    for (var i = 0; i < midpoint; i++) {
        array2.push(array[(array.length - 1) - i]);
    }
    return [array1, array2];
}
//const arrayy = [1,7,5,6,2,3,4]
//let x = mergeSort(arrayy);
//console.log(x);
var midpoint1 = Math.ceil(2 / 2);
console.log(midpoint1);
