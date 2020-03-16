let swap = function (arr, index1, index2) {
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
}

let heapPermut = function(arr, output, n) {
    n = n || arr.length

    if(n === 1) {
        output(arr)
        console.log(arr)
    } else {
        for(let i=1; i<n; i++) {

            heapPermut(n - 1, arr)

            if(n%2) {
                swap(arr, 0, n-1)
            } else {
                swap(arr, i-1, n-1)
            }
        }
    }
}

let output = function (arr) {
    console.log(arr)
}


function permAlone(str) {
  return str;
}

// permAlone('aab');


heapPermut(['a', 'b', 'c'], output)
