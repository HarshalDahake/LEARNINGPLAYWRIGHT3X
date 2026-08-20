let max=0;
let arr = [20,30,10,101,1,5,99];

for(let i=0; i<arr.length; i++)
{
   if(arr[i]>max)
   {
     max=arr[i];
   }
}

console.log("Largest Number in an Array = "+max);
