function mergeSort(array:number[]):number[] { 
    "This function have time complexity of O(n log(n))"
    let sortedArray:number[];
    let left:number[];
    let right:number[]; 
        if (array.length <= 1 ){
            return array;
    }
    let [firstHalf, secondHalf] = splitArray(array);
    left = mergeSort(firstHalf);
    right = mergeSort(secondHalf);
    sortedArray = merge(left,right);
    return sortedArray;
}
function merge(left:number[],right:number[]):number[]{
    "This function have time complexity of O(n)"
    let array1:number[] = [];
    let i:number=0;
    let j:number=0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array1.push(left[i]);
            i++;
        } else {
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
    return array1
}
function splitArray(array:number[]){
    "This function have time complexity of O(n)"
    let midpoint = Math.floor(array.length/2);
    let array1:number[]=[];
    let array2:number[]=[];
    for (let i = 0; i < midpoint;i++){
        array1.push(array[i]);
    }
    midpoint = Math.ceil(array.length/2);
    for (let i = 0; i < midpoint;i++){
        array2.push(array[(array.length-1)-i]);
    }
    return [array1, array2];
}


const arrayy = [1,7,5,6,2,3,4]
let x = mergeSort(arrayy);
console.log(x);


//let midpoint1 = Math.ceil(2/2);
//console.log(midpoint1)