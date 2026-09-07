// ENUM is simple way to keep constant separately 
// and use them in the code. 
// It is a good practice to use ENUM for constant values.

enum TestStatus{
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

console.log(TestStatus.Pass);
console.log(TestStatus.Fail);
console.log(TestStatus.Skip);
console.log(TestStatus.Pending);
console.log(TestStatus.Blocked);