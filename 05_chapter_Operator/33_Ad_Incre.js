
let a = 10;

console.log(++a + a);  // 22

console.log(a);        // 11


/*------------- ERT: Expression Evaluation Trace — ++a + a ------
- Step 1:  a = 10
- Step 2:  ++a           → pre-increment: a becomes 11, returns 11
-          a             → reads current a, which is now 11
-          11 + 11 = 22  → prints 22
- Step 3:  a is now 11   → prints 11
----------------------------------------------------------------*/