
console.log("---------- 1st way------------");
/*
* * * * * 
* * * * 
* * * 
* * 
* 
*/
for(let i = 5; i >= 1; i--)
{
    for(let j = 1; j <= i; j++)
    {
        process.stdout.write("* ");
    }
    console.log("");
}

console.log("---------- 2nd way------------");
/*
* * * * * 
* * * * 
* * * 
* * 
* 
*/
for(let i = 1; i <= 5; i++)
{
    for(let j = 5; j >= i; j--)
    {
        process.stdout.write("* ");
    }
    console.log("");
}

console.log("---------- 3rd pattern------------");
/*
    * 
   * * 
  * * * 
 * * * * 
* * * * *
*/

let n=5;
for(let i = 1; i <= n; i++)
{
    for(let k = 1; k <= (n-i); k++)
    {
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++)
    {
        process.stdout.write("* ");
    }
    console.log("");
}

console.log("---------- 4th pattern------------");
/*
     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
*/

let n1=5;
for(let i = 1; i <= n; i++)
{
    for(let k = n1; k >= i; k--)
    {
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++)
    {
        process.stdout.write("* ");
    }
    console.log("");
}

console.log("---------- 5th pattern : Pyramid------------");
/*
    *
   ***
  *****
 *******
*********
*/
let n2=5;
for(let i = 1; i <= n2; i++)
{
    for(let k = 1; k <= (n2-i); k++)
    {
        process.stdout.write(" ");
    }
    for(let j = 1; j <= 2*i-1; j++)
    {
        process.stdout.write("*");
    }
    console.log("");
}