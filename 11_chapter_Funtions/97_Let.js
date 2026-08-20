var a = "Mitansh";
// 10,000lines 
if(true)
{
    console.log(a); 
    var a = "temp";
}
console.log(a);

// Temporal Dead Zone

// Global Scope
// a = "Mitansh"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);