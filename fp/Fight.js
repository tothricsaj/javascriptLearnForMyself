function Elf(name, weapon, life) {

}

function Wizzard(name, weapon, life) {

}


let user = {
    life: 30,
    weapon: {
        attack: 20,
        defense: 24
    }
}


const compose = (f, g) => (...args) => f(g(...args))

const attack = (...fns) => fns.reduce(compose)

attack(
    reduceLife,
    checkAttack
)()
const reduceLife = () => {}
const checkAttack = () => {}