
function primeOrNot(num)
{
    let count = 0;

    for(let i= 2;i<num/2;i++)
    {
        if(num%i === 0)
        {
            count++;
        }		
    }

    if(count === 0)
    {
        console.log(num+" is a prime number.");
    }
    else
    {
        console.log(num+" is not a prime number.");
    }
}

primeOrNot(73);
		
