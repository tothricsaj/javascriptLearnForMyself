let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!!!'), 1000)
})

console.log('1')

promise.then((msg) => {
    console.log('2')
    console.log('Hell yhea!! ' + msg)
})

console.log('3')
