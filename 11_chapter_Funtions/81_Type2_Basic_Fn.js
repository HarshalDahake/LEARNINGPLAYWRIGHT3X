
// Type 2 Functions - Have argument/parameter but no return type (void). 

function greetByName(name) // Parameter
{
      console.log("Hi", name);
}
greetByName("Harshal"); // Argument
greetByName("Mitansh");
greetByName("Namita");
console.log("------------");

let name1 = greetByName("Nikita"); // Argument
console.log(name1); // undefined : because function is not returning anything. It is a void function.
console.log("------------");