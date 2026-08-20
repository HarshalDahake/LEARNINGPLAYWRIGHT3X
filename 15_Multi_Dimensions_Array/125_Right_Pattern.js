// n = 3
// *
// * *
// * * *

let n = 3;
for (let i = 1; i <= n; i++) 
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write("*");
    }
    console.log("");  
}
