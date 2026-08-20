/* 
-push() method adds one or more elements to the end of an array and returns the new length of the array.
-pop() method removes the last element from an array and returns that element. This method changes the length of the array.
-unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
-shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.  
-splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
-splice(start, deleteCount, item1, item2, ...)
*/

let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

console.log("--------- push() -------------");
// Add to END
arr.push(4); // push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(arr); // [1, 2, 3, 4]

console.log("--------- pop() -------------");
// Remove from END
arr.pop(); // pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(arr); // [1, 2, 3]

console.log("--------- push() -------------");
arr.push(5, 6);
console.log(arr); // [ 1, 2, 3, 5, 6 ]

console.log("--------- unshift() -------------");
// Add to BEGINNING
arr.unshift(0); // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(arr); // [ 0, 1, 2, 3, 5, 6 ]

console.log("--------- shift() -------------");
// Remove from BEGINNING
arr.shift(); // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(arr); // [ 1, 2, 3, 5, 6 ]

console.log("--------- splice() -------------");
// splice(start, deleteCount, item1, item2, ...)
arr.splice(2, 1); // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(arr); // [ 1, 2, 5, 6 ]

arr.splice(2, 0, 99); 
console.log(arr); // [ 1, 2, 99, 5, 6 ]

arr.splice(1, 2, 10, 20); 
console.log(arr); // [ 1, 10, 20, 5, 6 ]