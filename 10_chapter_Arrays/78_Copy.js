// Shallow Copy
// Original array will not change if you change the copy. 

let original = [1, 2, 3];
let copy1 = [...original]; // spread
console.log(original);
console.log(copy1);
console.log("-----------------");

let copy2 = original.slice();
console.log(copy2);
console.log("-----------------");

let copy3 = Array.from(original);
console.log(copy3);
console.log("-----------------");

let copy4 = original.concat();
console.log(copy4);
console.log("-----------------");

copy1.push(99);
console.log(original); // [1, 2, 3] : original array is not changed
console.log(copy1); // [1, 2, 3, 99] : copy is changed
console.log("-----------------");

// Deep Copy : Original array will change if you change the copy.
let deep_copy_array = original;

deep_copy_array.push(91);
console.log(original); // [1, 2, 3, 91] : original array is changed
console.log(deep_copy_array); // [1, 2, 3, 91] : deep copy is changed