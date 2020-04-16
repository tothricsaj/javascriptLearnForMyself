function closure() {
    let count = 0
    return function increment() {
        count++
        return count
    }
}

let increment = closure()

console.log(increment())
console.log(increment())


