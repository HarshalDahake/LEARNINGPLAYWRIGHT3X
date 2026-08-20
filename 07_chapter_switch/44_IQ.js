
let fruit = "banana";

switch (fruit) 
{
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}

// Output: All cases from "banana" to default will execute 
// because there are no break statements.