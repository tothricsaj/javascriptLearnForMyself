let user = {
    life: 30,
    weapon: {
        attack: 20,
        defense: 24,
        damage: 5
    }
}


const compose = (f, g) => (...args) => f(g(...args))

const attack = (...fns) => fns.reduce(compose)

console.log(
    attack(
        reduceLife,
        checkAttack
    )(user, {attack: 29, damage: 3})
)

console.log(
    attack(
        reduceLife,
        checkAttack
    )(user, {attack: 22, damage: 3})
)

console.log(
    attack(
        reduceLife,
        checkAttack
    )(user, {attack: 42, damage: 12})
)

function checkAttack(user, enemyWeapon) {
    let usrAndEnemyWeapon = {...user, ...enemyWeapon}

    if(enemyWeapon.attack > user.weapon.defense) {
        usrAndEnemyWeapon.boom = true
    } else {
        usrAndEnemyWeapon.boom = false
    }

    return usrAndEnemyWeapon
}

function reduceLife (usrAndEnemyWeapon) {
    const {boom} = usrAndEnemyWeapon

    if(boom) {
        return {
            life: usrAndEnemyWeapon.life - usrAndEnemyWeapon.damage,
            weapon: usrAndEnemyWeapon.weapon
        }
    }

    return {
        life: usrAndEnemyWeapon.life,
        weapon: usrAndEnemyWeapon.weapon
    }

}