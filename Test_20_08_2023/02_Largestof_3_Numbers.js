    let a = 101;
    let b = 102;
    let c = 901;

    if(a>=b && a>=c)
    {
        if(a===b && a===c)
        {
            console.log("All are equals.")
        }
        else if(a===b)
        {   
            console.log(a, " and ", b, " are equal. ");
        }
        else if(a===c)
        {
            console.log(a, " and ", c, " are equal. ");
        }
        else
        {
            console.log(a, " is greater.");
        }
    }
    else if(b>=c)
    {
        if(b===c)
        {
            console.log(b, " and ", c, " are equal. ");
        }
        else
        {
            console.log(b, " is greater.");
        }
    }
    else
    {
        console.log(c, " is greater.");
    }
