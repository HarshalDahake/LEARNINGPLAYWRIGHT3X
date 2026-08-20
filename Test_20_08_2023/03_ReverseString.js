let str = "HarshalDahake";
let revStr="";

for(let i=str.length-1;i>=0;i--)
{
   revStr = revStr + str.charAt(i);
}

console.log("Original String = ", str);
console.log("Reverse String = ", revStr);