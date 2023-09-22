import { Animal, ISwimmerHunter } from "./Animal.js";
import { convertDuration } from "./timeConverter.js";

export class Tiger extends Animal implements ISwimmerHunter {
    private lastTimeOutOfCage: Date = new Date('2023-09-22T08:24:00');
    private isInCage: boolean = true;

    leaveCage() {
        this.isInCage = false;
    };

    enterCage() {
        this.isInCage = true;
        this.lastTimeOutOfCage = new Date();
    }

    getLastTimeOutside(): string {
        if (!this.isInCage) {
            return (`Tiger is outside now`);
        } else {
            return (`Tiger was outside ${convertDuration(new Date().getTime() - this.lastTimeOutOfCage.getTime())} time ago`)
        }
    }

    makeSound(): string {
        return `Tiger roars!`;
    }

    swim(): string {
        return `Tiger is swimming.`;
    }

    hunt(): string {
        return `Tiger is hunting.`;
    }
}