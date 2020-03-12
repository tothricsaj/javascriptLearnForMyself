function updateInventory(arr1, arr2) {
    arr2.forEach((newEl, newInd) => {
        arr1.forEach((currEl, currInd) => {
            console.table({
                newElem: newEl[1],
                currentElem: currEl[1]
            })
            if(newEl[1] === currEl[1]) {
                currEl[0] += newEl[0]
            }
        })
    });

    return arr1
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
