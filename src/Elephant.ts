import { Animal, IWalkerSleeper } from "./Animal.js";

export class Elephant extends Animal implements IWalkerSleeper {
    private weight: number;
    private isSleeping: boolean = false;

    constructor(name: string, age: number,weight:number) {
        super(name,age);
        this.weight = weight;
    }

    getWeight():number{
        return this.weight;
    }

    makeSound(): string {
        this.fatigue -= 10;
        return `Elephant toots.`;
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
        this.fatigue -= 25;
        return `Elephant is walking.`;
    }
}