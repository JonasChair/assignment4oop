export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fatigue = 100;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    eat(amount) {
        this.fatigue += amount;
    }
    checkFatigue() {
        return `${this.name} has ${this.fatigue} fatigue left`;
    }
}
