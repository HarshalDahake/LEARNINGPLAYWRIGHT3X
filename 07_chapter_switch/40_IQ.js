/*================= Switch Statement ================    
- without break, execution falls through to the next case until 
  a break is encountered or the switch ends.
*================================================*/
// 1 - Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday, 7 = Sunday
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}