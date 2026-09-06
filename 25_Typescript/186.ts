// Primitive types

let name: string = "John";
console.log("Name:", name);

let age: number = 30;
console.log("Age:", age);

let pi: number = 3.14;
console.log("Pi:", pi);

let distance_to_moon: number = 398765434567;
console.log("Distance to Moon:", distance_to_moon);

//let pi: float = 3.14;

let isActive: boolean = true;
console.log("Is Active:", isActive);

let nothing: null = null;
console.log("Nothing:", nothing);

let notDefined: undefined = undefined;
console.log("Undefined:", notDefined);

// Arrays
let numbers: number[] = [1, 2, 3];
console.log("Numbers Arrays:", numbers);

let names: Array<string> = ["John", "Jane"];
console.log("Strings Arrays:", names);

// Any (avoid when possible)
let anything: any = "hello";
console.log("Anything:", anything);

// Unknown (safer than any)
let unknown: unknown = "hello";
console.log("Unknown:", unknown);

let message: string = "Hello, TypeScript!";
let count: number = 42;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);

let obj: {name: string ; age: number} = { name: "Harshal", 
                                          age: 34 
                                        };
console.log("name:", obj.name);
console.log("age:", obj.age);