import { Animal } from "./Animal.js";
export class Zebra extends Animal {
    constructor(name, age, maxSpeed, origin) {
        super(name, age);
        this.isSleeping = false;
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
    getOrigin() {
        return this.origin;
    }
    makeSound() {
        this.fatigue -= 10;
        return `Zebra sound`;
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
        this.fatigue -= 20;
        return `Zebra is walking!`;
    }
    jump() {
        this.fatigue -= 30;
        return `Zebra jumped`;
    }
    run() {
        this.fatigue -= 50;
        return `Zebra is running at ${this.maxSpeed} km/h!`;
    }
}
