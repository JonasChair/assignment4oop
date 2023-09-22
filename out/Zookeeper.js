export class Zookeeper {
    constructor(name) {
        this.name = name;
    }
    feedAnimal(animal, ammount) {
        animal.eat(ammount);
        return `Zookeeper ${this.name} fed ${animal.getName()} at ${new Date().toLocaleTimeString()}`;
    }
}
