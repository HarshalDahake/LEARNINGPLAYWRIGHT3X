var a = "Harshal";

if(true)
{
    console.log(a); // Harshal in case of var
    var a = "temp";
    console.log(a); // temp
}



// let b = "Mitansh";

// if(true)
// {
//     console.log(b); // error in case of let due to TDZ.
//     var b = "temp";
//     console.log(b); // temp
// }