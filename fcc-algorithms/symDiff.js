let arr1 = [1,2,3];
let arr2 = [5, 2, 1, 4];

function symDiff(...args) {
  let mergedArr = [];
  let result = [];
  for(let i=0; i<args.length; i++) {
    mergedArr = [...mergedArr, ...args[i]];
  }
  return mergedArr;
}

console.log(symDiff(arr1, arr2));
