
let nums = [10, 25, 30, 45];

// find() : returns first element that satisfies the condition
let result = nums.find(temp => temp > 20); 
console.log(result); // 25

// findIndex() : returns first index that satisfies the condition
let index = nums.findIndex(n => n > 20); 
console.log(index); // 1

// findLast() : returns last element that satisfies the condition
let lastResult = nums.findLast(n => n > 20);
console.log(lastResult); // 45

// findLastIndex() : returns last index that satisfies the condition
let lastIndex = nums.findLastIndex(n => n > 20);
console.log(lastIndex); // 3