import { Animal } from "./Animal.js";

export class Zookeeper {
    private name: string;

    constructor(name:string) {
        this.name = name;
    }

    feedAnimal(animal:Animal,ammount:number): string{
        animal.eat(ammount);
        return `Zookeeper ${this.name} fed ${animal.getName()} at ${new Date().toLocaleTimeString()}`;
    }
}