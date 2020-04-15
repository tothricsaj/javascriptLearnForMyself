class Elf {
    static #age = 1225
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
}

let legolas = new Elf('Legolas', 'Bow')
console.log(legolas.name, legolas.weapon)
