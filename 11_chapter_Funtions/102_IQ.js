greet("Alice"); 

function greet(name) 
{
    console.log('Hi');
    return `Hello, ${name}!`;
}

console.log("-----------------");

sayHi("Bob"); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function (name) 
{
    return `Hi, ${name}!`;
};


// A normal function declaration is hoisted, so it can be called before its declaration.
// A function expression assigned to const is not initialized until execution reaches it,
// so it cannot be called before the assignment.