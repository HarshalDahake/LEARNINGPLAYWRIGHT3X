
console.log("Enter the number!");

const data = require('fs').readFileSync(0, 'utf8');

console.log("Hi", data);

/* In new terminal,
- run the program using the command: node 51_Fs.js
- In the Powershell terminal: Below option works for me.
- Type 15
- Press Enter
- Press Ctrl+Z
- Press Enter */



// In the terminal: Not works for me.
// Type 15
// Press Enter
// Press Ctrl+D --- Ctrl+D doesn't send EOF on Windows (especially incmd/PowerShell)


