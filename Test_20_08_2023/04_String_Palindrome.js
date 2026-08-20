let str = "NamaN";
let revStr="";

for(let i=str.length-1;i>=0;i--)
{
   revStr = revStr + str.charAt(i);
}

if(str === revStr)
{
 console.log(str, " is Palindrome String.");
}
else
{
 console.log(str, " is not a Palindrome String.");
}