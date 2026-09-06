class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //. It is used for the parent constructor.
        this.breed = breed;
    }
    bark() {
        super.foo(); // Call the parent method foo() using super keyword
        console.log(this.name+" breed is "+this.breed+", and he is barking!")
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);