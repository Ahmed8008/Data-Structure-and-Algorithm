let array: number[] = [9, 8, 7, 6, 5, 3, 2,1];
let newarray: number[] = [];

function merge(left: number[], right: number[]): number[] {
    let mergedArray: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
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

function split(array: number[]): number[] {
    const l: number = array.length;

    if (l <= 1) {
        return array;
    }

    const mid: number = Math.floor(l / 2);
    const left: number[] = array.slice(0, mid);
    const right: number[] = array.slice(mid);

    const sortedLeft: number[] = split(left);
    const sortedRight: number[] = split(right);

    return merge(sortedLeft, sortedRight);
}

newarray = split(array);
console.log("Sorted Array:", newarray);
