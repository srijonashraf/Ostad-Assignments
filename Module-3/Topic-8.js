const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

rl.question("Enter your name: ", function (name) {
    rl.question("Enter your age: ", function (age) {
        const person1 = new Person(name, age);
        person1.introduce();

        rl.question("Enter your major: ", function (major) {
            const student1 = new Student(name, age, major);
            student1.introduce();
            rl.close();
        });
    });
});