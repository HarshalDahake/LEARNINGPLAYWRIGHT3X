
let fruit = [];
console.log(fruit.length);
fruit[0] = "apple";
fruit[1] = "banana";
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[1]);

console.log("----------------------");

let browsers = ["chrome", "firefox", "webkit"];

console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);

// For the Negative indexedDB, use the at
console.log(browsers[-1]); // browsers[-1] is undefined but browsers.at(-1) will give you the last element of the array.
console.log(browsers.at(0));