
let arr = [10, 20, 30, 40];

console.log(arr.length);

// 0 to 3
console.log(arr[4]); // undefined


console.log("----------------------");

let testResults = ["pass", "fail", "pass", "skip"];

for (let i = 0; i < testResults.length; i++)
{
    console.log(testResults[i]);
}


console.log("----------------------");

let mixed = [1, "hello", true, null];

for (let i = 0; i < mixed.length; i++) 
{
    console.log(mixed[i]);
}