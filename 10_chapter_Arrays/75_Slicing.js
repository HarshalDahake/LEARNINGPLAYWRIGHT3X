// Slice & Combining

/* slice() method returns a shallow copy of a portion of an array 
   into a new array object selected from start to end (end not included) 
   where start and end represent the index of items in that array. 
   The original array will not be modified. */

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) . index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1, 3)); // [2, 3] (copy from index 1 to index 3, not including index 3)
console.log(arr); // Original array is not modified.

console.log(arr.slice(2)); // [3, 4, 5] (copy from index 2 to the end of the array)


console.log(arr.slice(-2)); // [4, 5] (copy from the second last index to the end of the array)
console.log(arr.slice(-3)); // [3, 4, 5] (copy from the third last index to the end of the array)

console.log(arr.slice(0));// [1, 2, 3, 4, 5] (copy the entire array)

console.log(arr.slice(-5));// [1, 2, 3, 4, 5] (copy the entire array from the fifth last index to the end of the array)

console.log(arr.slice(-3, -5)); // Empty array, because -3 is greater than -5.