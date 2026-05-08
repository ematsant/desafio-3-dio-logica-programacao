class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
        let attackName = ""
        switch(this.type){
            case "mage":
                attackName = "magic."
                break
            case "warrior":
                attackName = "a sword."
                break
            case "monk":
                attackName = "martial arts."
                break
            case "ninja":
                attackName = "a shuriken."
                break
            default:
                attackName = "Unknown attack."
        }
        console.log(`The ${this.type} attacked using ${attackName}`)
    }
}
const heroes = [
    new Hero("Merlin", 100, "mage"),
    new Hero("Achilles", 30, "warrior"),
    new Hero("Benkei", 32, "monk"),
    new Hero("Naruto", 19, "ninja")
]
console.log("\n***Start***\n")
for (let hero of heroes){
    hero.attack()
}
console.log("\n***End***\n")