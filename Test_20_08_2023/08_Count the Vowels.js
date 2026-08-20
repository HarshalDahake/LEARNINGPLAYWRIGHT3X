let str1 = "JavAscript Programming";
let str = str1.toLowerCase();
let count =0;

for(let i=0; i<str.length; i++)
{
   if(str[i]==="a" || str[i]==="e" || str[i]==="o" || str[i]==="i" || str[i]==="u")
   {
       count = count + 1;
   }
}

console.log("Count the Vowels in "+str1+" is "+count);
