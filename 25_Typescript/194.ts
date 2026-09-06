// never - function never returns (throws or infinite loop)

function infiniteLoop(): never {
    while (true) { }
}


function throwError(message: string): never {
    throw new Error(message);
}


// void - function returns nothing/empty.
// never - function never returns (throws or infinite loop)
//       - In this case function will never return a value, 
//       - it will either throw an error or run indefinitely.

