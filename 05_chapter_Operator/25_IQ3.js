/*================= Ternary (Conditional) Operator ================
// Ternary Operator (condition ? valueIfTrue : valueIfFalse)
// A shorthand for if-else. Evaluates a condition and returns
// one of two expressions — the first if truthy, the second if falsy.
// Syntax: condition ? expr1 : expr2
================================================*/

let isCI = true;

let browserMode = isCI ? "headless" : "headed";

console.log("Launching browser in:", browserMode, "mode");