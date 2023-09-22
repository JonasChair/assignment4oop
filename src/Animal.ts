export abstract class Animal {
    private name: string;
    private age: number;
    protected fatigue: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.fatigue = 100;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    eat(amount:number):void{
        this.fatigue += amount;
    }

    checkFatigue():string{
        return `${this.name} has ${this.fatigue} fatigue left`;
    }

    abstract makeSound(): void;
}

export interface IWalkerSleeper {
    sleep(): void;
    wakeUp(): void;
    checkSleep(): boolean;
    walk(): void;
}

export interface IJumperRunner {
    jump(): void;
    run(): void;
}

export interface ISwimmerHunter {
    swim(): void;
    hunt(): void;
}