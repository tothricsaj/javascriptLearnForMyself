let arr1 = [1,2,3, 2];
let arr2 = [5, 2, 1, 4, 5];

function segment(arr1, arr2) {
    let moreArr;
    let lessArr;

    arr1 = arr1.filter((v, i) => arr1.indexOf(v) === i);
    arr2 = arr2.filter((v, i) => arr2.indexOf(v) === i);

    if(arr1 > arr2) {
        moreArr = arr1;
        lessArr = arr2;
        console.log(`arr1 > arr2 ---> ${moreArr}, ${lessArr}`);
    } else if(arr1 < arr2) {
        moreArr = arr2;
        lessArr = arr1;
        console.log(`arr1 < arr2 ---> ${moreArr}, ${lessArr}`);
    } else {
        moreArr = arr1;
        lessArr = arr2;
        console.log(`arr1 = arr2 ---> ${moreArr}, ${lessArr}`);
    }
    
    console.log(moreArr, lessArr);
}

segment(arr1, arr2);

/*
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
*/
