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
                attackName = "magic"
                break
            case "warrior":
                attackName = "a sword"
                break
            case "monk":
                attackName = "martial arts"
                break
            case "ninja":
                attackName = "a shuriken"
                break
            default:
                attackName = "Unknown attack"
        }
        console.log(`The ${this.type} attacked using ${attackName}`)
    }
}
const heroes = new Hero("Merlin", 100, "mage")
heroes.attack()