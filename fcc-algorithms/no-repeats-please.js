let output = function (arr) {
    console.log(arr)
}

function swap(arr, index1, index2) {
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp

    return arr
}

function heapGenerate(arr, n, output) {
    if(n === 1) {
        output(arr)
    } else {
        heapGenerate(n - 1, arr)

        for(let i=0; i<n-1; i++) {
            if(n%2) {
                swap(arr, i, n-1)
            } else {
                swap(arr, 0, n-1)
            }

            heapGenerate(arr, n-1)
        }
    }
}

function permAlone(str) {
  return str;
}

// permAlone('aab');

heapGenerate(['a', 'b', 'c'], output)

