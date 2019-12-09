let arr1 = [1, 2, 3, 2];
let arr2 = [5, 2, 1, 4, 5];

const makeSetFromArr = (arr) => {
    // make set from array and sort
    return arr.filter((v, i) => arr.indexOf(v) === i).sort();
}

function checkMoreAndLess() {

    if(this.arr1 > this.arr2) {
        this.moreArr = this.arr1;
        this.lessArr = this.arr2;
    } else if(this.arr1 < this.arr2) {
        this.moreArr = this.arr2;
        this.lessArr = this.arr1;
    } else {
        this.moreArr = this.arr1;
        this.lessArr = this.arr2;
    }
}

function segment(arr1, arr2) {
    /*
     * make segment of two set
    */

    this.arr1 = arr1;
    this.arr2 = arr2;
    
    this.arr1 = makeSetFromArr(this.arr1);
    this.arr2 = makeSetFromArr(this.arr2);

    this.moreArr = '';
    this.lessArr = '';
    
    checkMoreAndLess();
    
    return moreArr.filter((value, index) => {
        return lessArr.indexOf(value) !== -1;
    });
}

// console.log(segment(arr1, arr2));
// console.log(segment([1, 2, 5], [2, 3, 5]));
// console.log(segment([6, 2, 1, 5, 7], [3, 4, 6, 6, 7]));

function symDiffOnlyTwoArr(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;

    this.moreArr = '';
    this.lessArr = '';

    this.segmentSet = segment(this.arr1, this.arr2);

    checkMoreAndLess();

    let mergedArr = [...this.moreArr, ...this.lessArr];
    let result = [];

    // make set from mergeArr
    let mergedSet = makeSetFromArr(mergedArr);

    return mergedSet.filter((value, index) => {
        let segBool = segmentSet.indexOf(value) !== -1;
        return segmentSet.indexOf(value) === -1;
    });
}

console.log(symDiffOnlyTwoArr([1, 2, 5], [2, 3, 5]));
console.log(symDiffOnlyTwoArr([12, 2, 5], [2, 23, 3, 5]));
console.log(symDiffOnlyTwoArr([6, 2, 1, 5, 7], [3, 4, 6, 6, 7]));


/*
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

console.log(symDiff(arr1, arr2));
console.log(symDiff([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(symDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
*/
