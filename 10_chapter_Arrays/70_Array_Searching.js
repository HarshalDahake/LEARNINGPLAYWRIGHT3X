//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip"));  // -1 : element not found

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail")); // 4

// includes — returns boolean
console.log(results.includes("error")); // true