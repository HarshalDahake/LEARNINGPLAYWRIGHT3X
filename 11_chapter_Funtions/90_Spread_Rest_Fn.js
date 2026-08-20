
// ...num (spread) : Expands an iterable into individual elements.
function add(a, b, c, d) 
{
    return a + b + c + d;
}
let num = [1, 2, 3, 5, 8];
console.log(add(...num)); 


// ...codes (rest) : Collects remaining function arguments into an array.
function hasError(...codes) 
{
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404, 501];
let responseCodes2 = [200, 201, 301, 101];
console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes2));

/*
some() is an array method that checks whether
at least one element passes a test. 
It returns 'true' if any element matches, 'false' if none do 
— then it stops early at the first match.

So some() is the "OR" version of every():
every() needs all elements to pass, 
some() needs only one.
*/