import { Animal, IWalkerSleeper, IJumperRunner } from "./Animal.js";

export class Zebra extends Animal implements IWalkerSleeper, IJumperRunner {
    private maxSpeed: number;
    private origin: string;
    private isSleeping: boolean = false;

    constructor(name: string, age: number, maxSpeed: number, origin: string) {
        super(name, age)
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }

    getOrigin() {
        return this.origin;
    }

    makeSound(): string {
        return `Zebra sound`;
    }

    sleep(): void {
        this.isSleeping = true;
    }

    wakeUp(): void {
        this.isSleeping = false;
    }

    checkSleep(): boolean {
        return this.isSleeping;
    }

    walk(): string {
        return `Zebra is walking!`;
    }

    jump(): string {
        return `Zebra jumped`;
    }
    
    run(): string {
        return `Zebra is running at ${this.maxSpeed} km/h!`
    }
}