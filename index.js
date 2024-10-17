const prompt = require("prompt-sync")();

class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type        
    }

    attack() {
        
        if (this.type === 'mage') {
            console.log(`The ${this.type} ${this.name} attacked using a spell`)
        } else if (this.type === 'warrior') {
            console.log(`The ${this.type} ${this.name} attacked using a sword`)
        } else if (this.type === 'monk') {
            console.log(`The ${this.type} ${this.name} attacked using a staff`)
        } else if (this.type === 'ninja') {
            console.log(`The ${this.type} ${this.name} attacked using a shuriken`)
        } else {
            console.log(`The ${this.type} ${this.name} attacked using an unknown weapon`)
        }
    }
}

function createHero() {
    const name = prompt('Type the hero name: ')
    const age = prompt('Type the hero age: ')
    const type = prompt('Type the hero class: ')

    let hero = new Hero(name, age, type)
    
    return hero
}

function main() {
    let hero = createHero()
    hero.attack()
    let hero2 = createHero()
    hero2.attack()
    let hero3 = createHero()
    hero3.attack()
}

main()