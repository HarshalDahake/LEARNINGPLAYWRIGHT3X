/*Abstraction can be achieved in TypeScript using the following ways:
- Interface
- Enums
- Abstract class
*/
interface User {
  name: string;
  age: number;
  email: string;
}

const user1: User  = {
    name: "John",
    age :  30,
    email: "abc@gmail.com"
}

const user2: User  = {
    name: "John2",
    age :  34,
    email: "abc@gmail.com"
}

const user3: User  = {
    name: "John3",
    age :  23,
    email: "abc@gmail.com"
}

/* Interfaces:
- An interface defines the SHAPE of an object.
- what properties it must have and what types those **properties must be.** 
- It's like a contract. If an object says "I follow this interface," it MUST have all the required properties.

- Interfaces don't generate any JavaScript code. 
- They exist ONLY at compile time for type checking. 
  After compilation, interfaces completely disappear from the output.
*/