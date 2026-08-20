function getStatus(code) 
{
    if (code >= 200 && code < 300) 
    {
        return "Success";
    } 
    else if (code >= 400 && code < 500) 
    {
        return "client error";
    } 
    else if (code >= 500) 
    {
        return "server error";
    } 
    else
    {
        return "unknown";
    }
}

console.log(getStatus(200)); // Success
console.log(getStatus(404)); // client error
console.log(getStatus(500)); // server error
console.log(getStatus(100)); // unknown
console.log("------------------");

// Returns nothing → undefined
function logTest(name) 
{
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");

console.log("------------------");
function aaa() 
{
    return [2, 2, 3, 5, 4]; // Array
}
console.log(aaa()); // [ 2, 2, 3, 5, 4 ]
console.log(typeof(aaa())); // Object
console.log(Array.isArray(aaa())); // true

console.log("------------------");
function bbb() 
{
    return {name : "Harshal"}; // Object
}
console.log(bbb()); // { name: 'Harshal' }
console.log(typeof(bbb())); // object

console.log("------------------");
let array = [10,20,30,40];
console.log(array); // [ 10, 20, 30, 40 ]
console.log(typeof(array)); // Object
console.log(Array.isArray(array)); // true