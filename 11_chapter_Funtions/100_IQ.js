
let a = 10

console.log(a) // 10

if (true)
{ 
    console.log(a); // error due to TDZ : Cannot access 'a' before initialization
    let a = 20;
}