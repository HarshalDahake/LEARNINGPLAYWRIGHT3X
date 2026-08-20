console.log("--- let : Block Scoped ---");
let b =20; // Global Scope
console.log(b); //  20

function printHello()
{
        console.log("Hello TheTestingAcademy!");
        let b = 30; // Local Scope
        console.log(b); // 30
        if(true)
        {
            let b = 5;
            console.log(b); // 5
        }
        console.log("let ->",b);   // 30
}

// Calling of the function
printHello();
console.log(b); // 20

console.log("----------------");

// ❌ Let does not allow you to have a re-declaration. 
// let c = 10;
// let c = 20;


// ✅ var allow you to have a re-declaration : Possible
// var d =11;
// var d = 100;

// not possible ❌
// let nn = "Harshal";
// var nn = "Harshal"; 

// not possible ❌
// var n1 = "Mitansh"; 
// let n1 = "Mitansh";

// const PI = 3.14;
// console.log(PI);
// PI = 3.14159; // ❌ Re-Assignment to constant variable is not possible.

// {

// }


const a = [1,2,3];
a.push(10); // (modification) ✅
console.log(a);
a[0]=10;   // (modification) ✅
console.log(a);
//a = [5,6,7]; // (reassignment) ❌

/*
Key Learning:
You cannot do a = [5,6,7] (reassignment) ❌
But you can do a.push(10) or a[0] = 10 (modification) ✅
The const keyword protects the reference to the array, 
not the contents of the array. 
This is why this code works without errors
—you're modifying what's inside the array, not replacing the array itself.
*/

// function adasd(){

// }