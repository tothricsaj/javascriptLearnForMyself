function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.forEach((newEl, i) => {
        arr1.forEach((curEl, ind) => {
            console.log(curEl[1] === newEl[1])
            if(curEl[1] === newEl[1]) {
                console.log('in')
                arr1[0] += arr2[0]
            }
        });

        console.log('---------------------------------------')
        
    });
    return arr1;
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
