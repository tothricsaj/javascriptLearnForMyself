function updateInventory(arr1, arr2) {
    arr2.forEach((newEl, newInd) => {
        let tmpArr = []
        arr1.forEach((currEl, currInd) => {
            
            if(newEl[1] === currEl[1]) {
                currEl[0] += newEl[0]
            }

            tmpArr.push(currEl[1])
        })

        if(!tmpArr.includes(newEl[1])) arr1.push(newEl)
    });

    return arr1.sort((a, b) => {
        if(a[1] < b[1]) return -1
        else if(a[1] > b[1]) return 1
        else return 0
    })
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.table(updateInventory(curInv, newInv))
