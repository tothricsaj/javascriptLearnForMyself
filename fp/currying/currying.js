const multiplyBy = (a) => (b) => a*b
const multiplyBy5 = multiplyBy(5)

console.log(multiplyBy5(2))
console.log(multiplyBy5(10))

const welcome = (name) => (greeting) => `Dear ${name}, ${greeting} Good to see you here!`
const welcomeJosh = welcome('Josh')
const welcomeGandalf = welcome('Gandalf')

console.log(welcomeJosh('Good day!'))
console.log(welcomeJosh('Welcome!'))

console.log(welcomeGandalf('Greatings big wizzard!'))
