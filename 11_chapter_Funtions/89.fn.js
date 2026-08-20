//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() 
{
    console.log("Hi")
}
name1();


// IIFE
(function(){
    console.log("Anonymous Fun");
})();

(function () {
    console.log("Staging")
})();

//Arrow Crazy

(() => {
    console.log("Setup complete");
})();

/*
The point of all three IIFEs: they run once,
  immediately, and create a private scope so their
  variables don't leak into the global scope —
  which is why they're used for things like
  "staging" or "setup" one-time initialization
  code. 
  The named function, by contrast, is reusable 
  — you can call it as many times as you want.
*/