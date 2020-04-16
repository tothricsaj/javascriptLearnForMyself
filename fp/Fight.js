function Elf(name, weapon, life) {

}

function Wizzard(name, weapon, life) {

}


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

function reduceLife (usrAndEnemyWeapon) {
    const {boom} = usrAndEnemyWeapon
    const life = usrAndEnemyWeapon.life - usrAndEnemyWeapon.damage

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