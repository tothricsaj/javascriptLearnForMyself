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


function checkAttack(user, enemyWeapon) {
    let usrAndEnemyWeapon = {...user, ...enemyWeapon}
    if(enemyWeapon.attack > user.weapon.attack) {
        usrAndEnemyWeapon[boom] = true
    } else {
        usrAndEnemyWeapon[boom] = false
    }

    return usrAndEnemyWeapon
}

const reduceLife = () => {}