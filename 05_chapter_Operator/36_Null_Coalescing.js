/*================= Nullish Coalescing Operator (??) ================  
- Nullish Coalescing Operator (??)
- Returns the right-side value ONLY if the left-side is null or undefined.
- If the left-side has any other value (including 0, "", false),
- it returns the left-side value.
- Syntax: left ?? right
=======================================*/

let amul = null;
let val = amul ?? "NANDANI Milk";
console.log(val);


let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);


let api_response1 = "Harshal Dahake";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);


// Examples covering edge cases mentioned above
// 1) Left-side is 0 (should NOT fall back)
let zero = 0;
console.log(zero ?? 42); // prints 0

// 2) Left-side is empty string "" (should NOT fall back)
let emptyStr = "";
console.log(emptyStr ?? "fallback"); // prints ""

// 3) Left-side is false (should NOT fall back)
let boolFalse = false;
console.log(boolFalse ?? true); // prints false

// 4) Left-side is undefined (should fall back)
let undef;
console.log(undef ?? "was undefined"); // prints "was undefined"

// 5) Chaining/coalescing multiple values
let first = null;
let second = undefined;
let third = "thirdValue";
console.log(first ?? second ?? third ?? "default"); // prints "thirdValue"

// 6) Using with expressions
let count = null;
console.log((count ?? 0) + 5); // prints 5