import { Animal } from "./Animal.js";
import { convertDuration } from "./timeConverter.js";
export class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.lastTimeOutOfCage = new Date('2023-09-22T08:24:00');
        this.isInCage = true;
    }
    leaveCage() {
        this.isInCage = false;
    }
    ;
    enterCage() {
        this.isInCage = true;
        this.lastTimeOutOfCage = new Date();
    }
    getLastTimeOutside() {
        if (!this.isInCage) {
            return (`Tiger is outside now`);
        }
        else {
            return (`Tiger was outside ${convertDuration(new Date().getTime() - this.lastTimeOutOfCage.getTime())} time ago`);
        }
    }
    makeSound() {
        this.fatigue -= 10;
        return `Tiger roars!`;
    }
    swim() {
        this.fatigue -= 25;
        return `Tiger is swimming.`;
    }
    hunt() {
        this.fatigue -= 35;
        return `Tiger is hunting.`;
    }
}
