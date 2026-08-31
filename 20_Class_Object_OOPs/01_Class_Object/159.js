/*------------- constructor -------------------------------------------
- A special function that runs automatically, 
  once, at the moment an object is born.
- constructors actually help you to create the attributes 
  and assign the value when the object is getting created. How many?
- The constructor is a special method that `new` calls automatically 
  to initialise a new instance. It's where `this` gets its properties. 
  One per class, runs once per object.
-----------------------------------------------------------------------*/
class Car{
    // constructor(){
    //  // Default Conscutor
    // }

    // Param
    constructor(assigned_name){
        this.name = assigned_name;
        //this -> current object referance.
    }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let hyndai_create = new Car("creta");
console.log(hyndai_create.name);



const a = new Car("i11");     // constructor runs → "i10"
console.log(a.name);
const b = new Car("Nexon");
console.log(b.name);

// class Bad { constructor(a) {} constructor(b) {} }

class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it