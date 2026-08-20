// Nested the For Loop
// 1 Array - W

console.log("----------------------");
for (let i = 0; i < 3; i++) 
{
    for (let j = 0; j < 3; j++) 
    {
        console.log(i, j);
    }
}

console.log("-------- Simple Triangle --------------");

let row = 5;
for (let i = 1; i <= row; i++)
{
    let sum = "";
    for (let j = 1; j <= i; j++)
    {
        sum = sum + "*";
    }
    console.log(sum);
}
console.log("-------- Pascal Triangle --------------");

let row1 = 5;
for (let i = 1; i <= row1; i++)
{
    let sum = "";
    for (let k = 1; k <= row1-i; k++)
    {
        sum = sum + " ";
    }    
    for (let j = 1; j <= i; j++)
    {
        sum = sum + "* ";
    }
    console.log(sum);
}
console.log("---- Inverted Triangle ------");

let row2 = 5;
for (let i = 1; i <= row2; i++)
{
    let sum = "";
    for (let k = 1; k <= row2-i; k++)
    {
        sum = sum + " ";
    }    
    for (let j = 1; j <= i; j++)
    {
        sum = sum + "*";
    }
    console.log(sum);
}
console.log("----------------------");
