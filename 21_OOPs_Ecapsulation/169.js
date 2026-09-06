class Person{
        // hide your childs
        #child1;
        #child2;
        // private
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }
    getChild1(){
        return this.#child1;
    }
    getChild2(){
        return this.#child2;
    }
    setChild1(changed_name){
        this.#child1 = changed_name;
    }
    setChild2(changed_name){
        this.#child2 = changed_name;
    }    
    
}
let p = new Person("Harshal", "PXXX", "Mitansh");
// console.log(p.#child1);
console.log(p.name);
console.log(p.getChild1());
console.log("-----------------");
p.setChild1("Namita");
console.log(p.name);
console.log(p.getChild1());
console.log(p.getChild2());

/*
-Encapsulation is one of the four pillars of Object-Oriented Programming (OOPs). 
 It means bundling data (properties) and methods together inside a class 
 while hiding the internal details from the outside world.

--Key Concepts:
-Hide Internal Data: Use private members (prefixed with # in JavaScript) to prevent direct access
-Controlled Access: Provide public getter and setter methods to access/modify private data
-Data Protection: Ensure data integrity by controlling how properties are changed

--Benefits:
-Security: Hide sensitive data
-Control: Validate changes before updating
-Flexibility: Change internal implementation without breaking external code
-Maintainability: Clear interface between what's public and private

*/