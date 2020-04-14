function Elf(name, weapon) {

    let self = this

    this.name = name
    this.weapon = weapon

    this.build = function() {
        console.log(meditate())
        return `${this.name} is building something!!!!`
    }

    function meditate() {
        return `${self.name} is meditating!!!!`
    }
}

Elf.prototype.attack = function() {
    return `${this.name} attack with ${this.weapon}`
}

function DarkElf(name, weapon, magic) {
    Elf.call(this, name, weapon)
    this.magic = magic
}

DarkElf.prototype = Object.create(Elf.prototype)

DarkElf.prototype.makeMagic = function() {
    return `${this.name} uses the ${this.magic} spell`
}


let peter = new Elf('Peter', 'sword')
let darkPeter = new DarkElf('DarkPeter', 'wind', 'dragon eye')

console.log(peter.attack())
console.log(peter.build())

console.log(darkPeter.attack())
console.log(darkPeter.build())
console.log(darkPeter.makeMagic())