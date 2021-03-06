class Person {
    name;
    age;
    address;
    gender;
    constructor(name, age, address, gender) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    speak() {
        console.log(`
        Hello, I'm ${this.name}.
        I'm ${this.age} years old.
        I live in ${this.address}
        `)
    }
}
const hung = new Person("Hung", 17, "Hanoi", "male");
console.log(hung)
hung.speak()

class Animal {
    color;
    numberOfLegs;
    gender;
    name;
    constructor(color, numberOfLegs, gender, name) {
        this.color = color;
        this.numberOfLegs = numberOfLegs;
        this.gender = gender;
        this.name = name;
    }
    eat() {
        console.log(`Con ${this.name} đang ăn`)
    }
    isDangerous() {
        // if(this.numberOfLegs > 4 || this.numberOfLegs == 0) {
        //     console.log("Có nguy hiểm")
        // }else{
        //     console.log("Không nguy hiểm")
        // }
        console.log((this.numberOfLegs > 4 || this.numberOfLegs == 0) ? "Nguy hiem" : "Khong nguy hiem")
    }
}
const newAnimal = new Animal("xanh lá", 0, "đực", "rắn")
console.log(newAnimal)
newAnimal.eat()
newAnimal.isDangerous()

// static
class MyMath {
    static sum(a, b) {
        return a + b
    }
    static div(a, b) {
        return a / b
    }
}
console.log(MyMath.sum(1, 2))
// giu nguyen thuoc tinh & method

// ke thua
class Employee extends Person {
    constructor(name, age, address, gender) {
        super(name, age, address, gender);
    }
}
const myEmployee = new Employee('A', 17, 'HCM City', 'male');
console.log(myEmployee)