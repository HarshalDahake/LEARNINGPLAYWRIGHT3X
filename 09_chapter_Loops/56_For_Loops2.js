for (let _1 = 0; _1 <= 10; _1++) 
{
    console.log(_1); 
    /* We can use _1, _2, _3, etc. as identifiers in JavaScript, 
       but it's not a common practice. 
       It's better to use descriptive variable names for better code readability */
}
console.log("--------------------");

for (let pramod = 0; pramod > 1; pramod++)
{
    console.log(pramod); 
   /* This loop will not execute because the condition pramod > 1 is false 
      at the start (pramod is initialized to 0). */
} 
console.log("--------------------");

/* for (let pramod = 0; ; pramod++)
{
    console.log(pramod);
    // This loop will run indefinitely because there is no condition to stop it.
}
console.log("--------------------"); */

for (let somya = 0; somya < 18; somya++) 
{
    if (somya > 15) 
    {
        console.log("Gift from papa, iphone this year")
    } 
    else 
    {
        console.log("No Gift, iphone only barbie doll")
    }

}