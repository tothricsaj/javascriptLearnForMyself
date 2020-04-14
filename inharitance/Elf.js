function Elf(name, weapon) {
    this.name = name
    this.weapon = weapon
}

Elf.prototype.attack = function() {
    return `${this.name} attack with ${this.weapon}`
}

