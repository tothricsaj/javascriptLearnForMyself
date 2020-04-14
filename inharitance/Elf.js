function Elf(name, weapon) {
    this.name = name
    this.weapon = weapon

    let self = this
    this.build = function() {
        console.log(meditate())
        return `${this.name} is building something!!!!`
    }

    function meditate() {
        return `${self.name} is meditating!!!!`
    }

    console.log(this)
}

Elf.prototype.attack = function() {
    return `${this.name} attack with ${this.weapon}`
}


let peter = new Elf('Peter', 'sword')

console.log(peter.attack())
console.log(peter.build())
console.log(Elf.prototype)