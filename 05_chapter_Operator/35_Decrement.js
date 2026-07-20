
 let a = 10;
 let b = --a;
 console.log(b);  // 9
 console.log(a);  // 9

 // ERT: --a (pre-decrement)
 // ------------------------------------------------
 // Step 1: a = 10
 // Step 2: --a   → pre: a=9, returns 9  → b = 9
 // Step 3: prints 9, prints 9
 // ------------------------------------------------

console.log("-------");
 let c = 10;
 let d = c--;
 console.log(d);  // 10
 console.log(c);  // 9

 // ERT: c-- (post-decrement)
 // ------------------------------------------------
 // Step 1: c = 10
 // Step 2: c--   → post: returns 10, then c=9  → d = 10
 // Step 3: prints 10, prints 9
 // ------------------------------------------------