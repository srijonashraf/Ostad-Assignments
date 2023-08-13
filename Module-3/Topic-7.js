class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    fetch() {
        console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound(); 

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); 
dog.fetch(); 
