
function greetingClosure() {
    let cache = {}

    return function(name, greeting) {
        if(name in cache) {
            return `${greeting} Good to see you ${cache[name]}`
        } else {
            console.error('new participant in the cache')
            cache[name] = name
            return `${greeting} Good to see you ${cache[name]}`
        }
    }
}

let greeting = greetingClosure()

console.log(greeting('John', 'Welcome!'))
console.log(greeting('John', 'Welcome!'))
console.log(greeting('John', 'Welcome!'))
console.log(greeting('Gandalf', 'Greetings big wizzard!'))