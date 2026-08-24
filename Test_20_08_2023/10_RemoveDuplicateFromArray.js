let arr = [1,2,2,3,3,4,4,5];
let arr1 = [];

for(let i=0; i<arr.length; i++)
{
  if(!arr1.includes(arr[i]))
  {
     arr1.push(arr[i]);
  }
}

//console.log("Original Array = ", arr);
//console.log("Array after remove duplicates = ", arr1);

if(arr1.length===arr.length)
{
    console.log("No duplicate elements are found" , arr);
}
else
{
    console.log("After removing duplicate element from Array = ", arr1);
}