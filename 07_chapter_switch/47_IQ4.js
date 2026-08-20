
let status = 0;

console.log(typeof status) // Output: "number"

switch (status) 
{
    case false:
        console.log("false matched"); // ❌ 
        break;
    case 0:
        console.log("0 matched"); // ✅
        break;
}

// === Strict, value and data type both of them should be same.
// && ->  and gate
// ||  or gate
// & - bitwise, | bitwse, never use
// == -> loose comparsion - value or data type.

/* output: 0 matched
 Explanation: The switch statement evaluates the expression status, 
 which is 0. It then compares this value against each case. 
- The first case checks for false, which does not match 0. 
- The second case checks for 0, which matches the value of status. 
  Therefore, the code block associated with the second case is executed, 
  and "0 matched" is printed to the console.*/