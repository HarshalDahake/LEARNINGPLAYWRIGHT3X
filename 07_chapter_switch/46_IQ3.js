
let x = 10;

switch (x) 
{
    case 10:
        let b1 = 1;
        console.log(b1); // ✅
        break;
    case 10:
        let b2 = 2;
        console.log(b2); // ❌ This case will never be reached because the first case already matches and has a
        break;
    default:
        console.log("d");
}

/* Output: 1
- Explanation: The first case matches the value of x (10), 
- so it executes the code block associated with that case. 
- The second case is not executed 
  because the switch statement stops after the first match 
  and the break statement is used to exit the switch.*/