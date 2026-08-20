let browser = "Brave";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!"); // break not used in above cases, so all of them will execute till this code block.
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}