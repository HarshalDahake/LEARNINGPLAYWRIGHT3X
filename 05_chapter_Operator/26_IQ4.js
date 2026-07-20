/*================= Ternary (Conditional) Operator ================
// Ternary Operator (condition ? valueIfTrue : valueIfFalse)
// A shorthand for if-else. Evaluates a condition and returns
// one of two expressions — the first if truthy, the second if falsy.
// Syntax: condition ? expr1 : expr2
================================================*/

let responseTime = 850;  // ms

let sla = 1000;          // ms

let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";

console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);