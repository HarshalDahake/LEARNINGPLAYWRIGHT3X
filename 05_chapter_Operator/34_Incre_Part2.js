 let a = 10;
 console.log(++a + a + a++);  // 33
 console.log(a);              // 12

/*------------- ERT: Expression Evaluation Trace — ++a + a ------
- Step 1:  a = 10
- Step 2:  ++a           → pre-increment: a becomes 11, returns 11
-          a             → reads current a, which is now 11
-          11 + 11 = 22  → prints 22
- Step 3:  a is now 11   → prints 11
----------------------------------------------------------------*/

 console.log("-------");
 let i = 1;
 let result = i++ + ++i;
 console.log(result, i);       // 4 3

/*------------- ERT: Expression Evaluation Trace — i++ + ++i ------
- Step 1:  i = 1
- Step 2:  i++           → post-increment: returns 1, then i becomes 2
- Step 3:  ++i           → pre-increment: i becomes 3, returns 3
-          1 + 3 = 4     → prints 4 (result), i is now 3
----------------------------------------------------------------*/

console.log("-------");
 let b = 10;
 console.log(++b + ++b);       // 23
 console.log(b);               // 12

/*------------- ERT: Expression Evaluation Trace — ++b + ++b ------
- Step 1:  b = 10
- Step 2:  ++b           → pre-increment: b becomes 11, returns 11
- Step 3:  ++b           → pre-increment: b becomes 12, returns 12
-          11 + 12 = 23  → prints 23
- Step 4:  b is now 12   → prints 12
----------------------------------------------------------------*/

console.log("-------");
let c = 34;
let result1 = c++;
console.log(result1);          // 34
console.log(c);                // 35

/*------------- ERT: Expression Evaluation Trace — c++ ------
- Step 1:  c = 34
- Step 2:  c++           → post-increment: returns 34, then c becomes 35
- Step 3:  prints 34
- Step 4:  prints 35
----------------------------------------------------------------*/