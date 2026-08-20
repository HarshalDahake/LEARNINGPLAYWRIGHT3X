// Type 1 - No param, No Return -> final retunr undefined.

// Define a function : No Param and no Return (void)
function greet()
{
    console.log("Hi");
}

// Call the function.
greet();
greet();
greet();
console.log("-------");

let output = greet(); 
console.log(output); // undefined : because function is not returning anything. It is void function.
console.log("-------");


function openBrowser()
{
    console.log("Open Browser");
}

// openBrowser() : define a function but if you are not calling it 
// then it will not execute. It is just a definition of function.