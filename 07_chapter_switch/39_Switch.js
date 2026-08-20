/*================= Switch Statement ================
- switch chooses one action based on one value.
- It checks cases exactly, so 5 is not the same as "5".
- break stops and leaves the switch after a match.
- default runs when no case matches.
- You can use several cases for the same code block.
- Without break, execution falls through to the next case.
- The expression is evaluated once, then compared with each case.
- Cases can be expressions too, not just plain values.
- return also leaves the switch when used inside a function.
- switch only matches exact values, so use if...else for ranges.
*================================================*/
let day = 7; 
// 1 - Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday, 7 = Sunday
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        let c = 40;
        let d = 60;
        console.log(c + d);
        console.log("Sunday is the last day of the week");
        break;
    default:
        console.log("No idea which day it is");
}