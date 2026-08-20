
// Step 1 - Defination of functions
function getUserStatus()
{
    // var status_code = undefined; - not shown to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

// Step 2 - Calling of the functions
getUserStatus();


// Behind the scenes:
// getUserStatus();             <-- Calling of the functions
// var status_code;             <-- hoisted with undefined
// console.log(status_code);    <-- undefined
// status_code = "Active";      <-- assignment stays in place
// console.log(status_code);    <-- "Active"