
console.log(username); // Cannot access 'username' before initialization with let
let username = "Mitansh";
console.log(username);

/*
Why it fails with let:

Keyword	Hoisted?	Initialized?	       Result
var	    ✅ Yes	  ✅ Yes (as undefined)	Prints undefined
let	    ✅ Yes	  ❌ No	                ReferenceError
const	✅ Yes	  ❌ No	                ReferenceError

The Temporal Dead Zone:
let and const are hoisted to the top of their scope, but they're not initialized
From the start of the scope until the declaration line is reached, 
accessing them throws an error
This zone is called the "Temporal Dead Zone"

var gets initialized with undefined during hoisting, so there's no TDZ. 

This is why let is considered safer 
— it forces you to declare variables before using them.
*/