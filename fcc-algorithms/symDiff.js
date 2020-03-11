const diff = (arr1, arr2) => [
    ...arr1.filter(el => !arr2.includes(el)),
    ...arr2.filter(el => !arr1.includes(el)),
]

const sym = (...args) => [...new Set(args.reduce(diff))]

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
