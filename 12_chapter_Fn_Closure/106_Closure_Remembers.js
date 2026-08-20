function makeCounter(start = 0) 
{
    let count = start; 
    return {
        increment()
        { 
            count++;
        },
        decrement() 
        { 
            count--; 
        },
        get() 
        { 
            return count; 
        }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

// increment();

/*
- increment only exists as a method of the object stored in 
  counter (counter.increment).
- Calling bare increment() looks for a global function named increment, 
  which doesn't exist → ReferenceError: 
  increment is not defined.
*/