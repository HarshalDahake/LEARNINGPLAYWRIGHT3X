
// Type 3 Functions - No Parameter/Argument but have Return Type.

function sayHello()
{
    console.log("Hi");
    return "helllo";
}

let call = sayHello(); // sayHello() - Hi
console.log(call); // helllo
console.log(sayHello()); // sayHello() - Hi, helllo
console.log("-----------------------");


function greetByHi()
{
    console.log("WhatsApp")
    return [12,2,3,3,2];
}

let op = greetByHi(); // greetByHi() - WhatsApp
console.log(op); // [12,2,3,3,2]
console.log(greetByHi()); // greetByHi() - WhatsApp, [12,2,3,3,2]
console.log("-----------------------");