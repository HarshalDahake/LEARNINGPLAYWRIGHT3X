/*------------- What is function? -------------------------------------
- A function is a block of code that performs a specific task. 
- It can take inputs, called parameters, and can return an output. 
- Functions help to avoid code repetition and 
- make the code more organized and reusable. 
-----------------------------------------------------------------------*/

 let score1 = 85;
 let result1 = score1 >= 70 ? "pass" : "fail";
 console.log(result1);
 console.log("-------");

 let score2 = 45;
 let result2 = score2 >= 70 ? "pass" : "fail";
 console.log(result2);
 console.log("-------");

// Define a function.
function getResult(score)
{
    return score >= 70 ? "pass" : "fail";
}

// Call the function.
console.log(getResult(85)); // Pass
console.log(getResult(45)); // Fail
 console.log("-------");

