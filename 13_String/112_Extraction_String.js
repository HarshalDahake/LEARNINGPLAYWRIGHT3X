// Extracting Substrings
let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported ( start, end-1)
console.log(str.slice(0, 5)); // (0,4) -> "Login"
console.log(str.slice(11));
console.log(str.slice(-3));

let testNumber = str.slice(-3);

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));  // "Test"
console.log(str.substring(-3, 5));  // "Login" - here -3 treat as 0

// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-1));  // "1"