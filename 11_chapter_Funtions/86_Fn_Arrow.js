// normal funtion
function greet(name)
{
    return `Hello, ${name}!`;
}

// Function as expression.
const greet1 = function (name1) 
{
    return `Hello, ${name1}!`;
}

// Arrow Function
const greet2 = (name2) => `Hello, ${name2}!`;

// Arrow Funtion
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, 
// remove the curly braces, and use the =>


console.log(greet("Mitansh"));
console.log(greet1("Harshal"));
console.log(greet2("Namita")); 