/*================= Ternary (Conditional) Operator ================
// Ternary Operator (condition ? valueIfTrue : valueIfFalse)
// A shorthand for if-else. Evaluates a condition and returns
// one of two expressions — the first if truthy, the second if falsy.
// Syntax: condition ? expr1 : expr2
================================================*/


let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";

console.log(testResult);