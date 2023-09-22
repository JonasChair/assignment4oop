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
        return `Zebra is walking!`;
    }
    jump() {
        return `Zebra jumped`;
    }
    run() {
        return `Zebra is running at ${this.maxSpeed} km/h!`;
    }
}
