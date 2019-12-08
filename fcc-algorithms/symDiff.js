let arr1 = [1, 2, 3, 2];
let arr2 = [5, 2, 1, 4, 5];

const makeSetFromArr = (arr) => {
    // make set from array and sort
    return arr.filter((v, i) => arr.indexOf(v) === i).sort();
}

function segment(arr1, arr2) {
    /*
     * make segment of two set
    */

    let moreArr;
    let lessArr;

    arr1 = makeSetFromArr(arr1);
    arr2 = makeSetFromArr(arr2);

    if(arr1 > arr2) {
        moreArr = arr1;
        lessArr = arr2;
    } else if(arr1 < arr2) {
        moreArr = arr2;
        lessArr = arr1;
    } else {
        moreArr = arr1;
        lessArr = arr2;
    }

    return moreArr.filter((value, index) => {
        return lessArr.indexOf(value) !== -1;
    });
}

// console.log(segment(arr1, arr2));
// console.log(segment([1, 2, 5], [2, 3, 5]));
// console.log(segment([6, 2, 1, 5, 7], [3, 4, 6, 6, 7]));


function symDiff(...args) {
    let mergedArr = [];
    let result = [];

    for(let i=0; i<args.length; i++) {
        mergedArr = [...mergedArr, ...args[i]];
    }
    
    // make set from mergeArr
    let mergedSet = makeSetFromArr(mergedArr);

    return mergedSet;
    return result;
}

console.log(symDiff(arr1, arr2));

/*
console.log(symDiff(arr1, arr2));
console.log(symDiff([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(symDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
*/
