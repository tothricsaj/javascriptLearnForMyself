let arr1 = [1,2,3];
let arr2 = [5, 2, 1, 4];

function symDiff(...args) {
    let mergedArr = [];
    let result = [];

    for(let i=0; i<args.length; i++) {
        mergedArr = [...mergedArr, ...args[i]];
    }
    
    for(let i=0; i<mergedArr.length; i++) {
        if(!result.includes(mergedArr[i])) {
            result.push(mergedArr[i]);
        } else {
            let index = mergedArr.indexOf(mergedArr[i]);
            result.splice(index,1);
        }
    }

    return result;
}

console.log(symDiff(arr1, arr2));
console.log(symDiff([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(symDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
