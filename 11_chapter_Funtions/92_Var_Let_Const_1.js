console.log("--- Var : Function Scoped(), Traitor ---");
var x = 10;
console.log(x); // 10

// Define
function printHello()
{
    console.log("Hello TheTestingAcademy");
    var x = 20;
    console.log(x); // 20

    if(true)
    {
        var x = 30;
        console.log(x); // 30
    }

    console.log(x); //30  
/*Why: var is function-scoped (and hoisted). 
Inside printHello() there is one x for the whole function, 
so:the function's var x is hoisted,
it's set to 20 and logs 20,
the if block assigns x = 30 (same x) and logs 30,
after the if the value remains 30, so the final log prints 30.*/
}
printHello();
console.log(x); // 10


