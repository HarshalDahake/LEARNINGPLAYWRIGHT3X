
/* concat() method is used to merge two or more arrays. 
   This method does not change the existing arrays, 
   but instead returns a new array. */
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4] (new array)
console.log(c);

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a,...b]; 
console.log(d); // [1, 2, 3, 4] (new array)

// join() method joins all the elements of an array into a string 
// and returns this string.
let s = ["pass", "fail", "skip"].join(" | "); 
console.log(s); // pass | fail | skip