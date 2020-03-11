const diff = (arr1, arr2) => [
    ...arr1.filter(el => !arr2.includes(el)),
    ...arr2.filter(el => !arr1.includes(el)),
]
