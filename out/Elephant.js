import { Animal } from "./Animal.js";
export class Elephant extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.isSleeping = false;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    makeSound() {
        this.fatigue -= 10;
        return `Elephant toots.`;
    }
    sleep() {
        this.isSleeping = true;
    }
    wakeUp() {
        this.isSleeping = false;
    }
    checkSleep() {
        return this.isSleeping;
    }
    walk() {
        this.fatigue -= 25;
        return `Elephant is walking.`;
    }
}
