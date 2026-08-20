
let scores = [45, 82, 91, 60, 73];


// Map is used to transform the array into a new array of the same size.
let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail"); 
console.log(grades);


/* 
- Filter is used to filter out the array based on a condition. 
- It returns a new array with only the elements that satisfy the condition.
*/
let passing = scores.filter(s => s >= 65); 
console.log(passing);