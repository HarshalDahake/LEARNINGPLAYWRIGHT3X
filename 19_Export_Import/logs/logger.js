// Default Export -> Export One Main Thing

// Logger -> Logger is a file which will help you to write logs to capture events and documents. It will help you to capture overall for debugging purposes also. It can give you warnings, errors, information, debugging information, and many more.

export default function log(message) {
    console.log("[LOG] " + message);
}


export function logBetter(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}

console.log("We are exporting from this file to 157.js and 157_1.js");