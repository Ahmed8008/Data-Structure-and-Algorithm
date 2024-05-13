var array = [9, 8, 7, 6, 5, 3, 2];
var newarray = [];
function merge(left, right) {
    var mergedArray = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        }
        else {
            mergedArray.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        mergedArray.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArray.push(right[j]);
        j++;
    }
    return mergedArray;
}
function split(array) {
    var l = array.length;
    if (l <= 1) {
        return array;
    }
    var mid = Math.floor(l / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    var sortedLeft = split(left);
    var sortedRight = split(right);
    return merge(sortedLeft, sortedRight);
}
newarray = split(array);
console.log("Sorted Array:", newarray);
