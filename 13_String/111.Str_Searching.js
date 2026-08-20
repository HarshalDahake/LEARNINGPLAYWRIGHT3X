// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
console.log(url.includes("staging"));  
console.log(url.includes("production"));
console.log("------");

// startsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.startsWith("https://")); 
console.log(url.endsWith("true")); 
console.log("------");

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere")); // -1

// ASCII -> A -> 65