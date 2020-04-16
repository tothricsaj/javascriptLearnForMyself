const multiply = (a,b,c) => a*b*c
const multiplyBy5 = multiply.bind(null, 5)

console.log(multiplyBy5(1,2))
