let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!!!'), 1000)
})

promise.then((msg) => {
    console.log('Hell yhea!! ' + msg)
})