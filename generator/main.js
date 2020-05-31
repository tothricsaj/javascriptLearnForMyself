let generator

let getDataOne = (cb) => {
    setTimeout(() => {
        generator.next('dummy data one')
    }, 1000)
}

let getDataTwo = (cb) => {
    setTimeout(() => {
        generator.next('dummy data two')
    }, 1000)
}

function* main() {
    let dataOne = yield getDataOne()
    let dataTwo = yield getDataTwo()

    console.log('recieved data one', dataOne)
    console.log('recieved data two', dataTwo)
}

generator = main()
generator.next()