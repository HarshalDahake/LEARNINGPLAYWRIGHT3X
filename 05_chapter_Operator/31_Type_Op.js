/*================= Type Operators ================
- Type Operator (typeof)
- Returns the data type of a value as a string.
- Common results: "string", "number", "boolean", "object", "undefined"
- Note: typeof null → "object" (historical JS bug), typeof [] → "object"
===============================================*/

//7. Type Operators

console.log(typeof "hello"); // string
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number

console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof []);  // -> Type of Array : object
console.log(typeof {});  // -> Type of Object : object
console.log(typeof null);  // -> Type of Null : object
console.log(typeof undefined);  // -> Type of Undefined : undefined