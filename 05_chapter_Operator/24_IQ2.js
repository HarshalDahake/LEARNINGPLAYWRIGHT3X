/*================= Ternary (Conditional) Operator ================
// Ternary Operator (condition ? valueIfTrue : valueIfFalse)
// A shorthand for if-else. Evaluates a condition and returns
// one of two expressions — the first if truthy, the second if falsy.
// Syntax: condition ? expr1 : expr2
================================================*/

let environment = "staging";

let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
    
console.log(baseUrl);