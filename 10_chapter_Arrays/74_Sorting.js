
let fruits = ["banana", "apple", "cherry"];

// sort() : sorts the array in place and returns the sorted array.
// its alphabetical by default for strings and lexicographic for numbers.
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'cherry' ] : alphabetical sorting for strings
console.log("--------------------");

let score = [4,3,2];
console.log(score.sort()); // [ 2, 3, 4 ] - Lexicographic sort for numbers
console.log("--------------------");

let nums = [10,1,21,2];
nums.sort();
console.log(nums); // [1, 10, 2, 21] - Lexicographic sort for numbers
console.log("--------------------");

let nums1 = [10,1,21,2];
// Proper Sorting, ascending , descending

nums1.sort((a,b) => a-b); // return ascending array
console.log(nums1); // [1, 2, 10, 21]
console.log("--------------------");

nums1.sort((a,b) => b-a); // return descending array
console.log(nums1); // [21, 10, 2, 1]
console.log("--------------------");

nums1.reverse(); // returns the reversed array.
console.log(nums1); // [1, 2, 10, 21]
console.log("--------------------");